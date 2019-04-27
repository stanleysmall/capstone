import connexion
import six
import mysql.connector
import base64
import logging
import time
from threading import Timer
from datetime import datetime
import pytz
from pytz import timezone

from flask import jsonify
from flask import session
import requests 
import statistics
from flask import request

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server import util
from swagger_server.lime_py_api.limesurvey import Api

logging.basicConfig(level=logging.INFO)     # Enable logging

# Log into LimeSurvey with the RemoteControl API
lime = Api('http://10.5.0.5/index.php/admin/remotecontrol', 'admin',
           'password')

timers = []                     # Timers to stop after testing
delay_start = [True]            # If empty, survey does not delay activation

# Connect to MySQL database
mydb = mysql.connector.connect(host='10.5.0.6',
                               port=3306,
                               database='mydb',
                               user='root',
                               password='root',
                               buffered=True)
cursor = mydb.cursor()


def survey_delete(name):  # noqa: E501
    """deletes the survey with a given name

    :param name: the name for a survey
    :type name: str

    :rtype: str
    
    PRE: tag type must be called 'name'
    """
    
    # Retrieve ID of survey with "name"
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = " \
                   "tag.ID && tag.type = 'name' && tag.value = '"
                   + name + "';")
    survey_ID = cursor.fetchone()
    
    # Delete survey only if ID is found for "name"
    if survey_ID:
        survey_ID = str(survey_ID[0])
        # Delete all rows in the database that reference the survey
        cursor.execute("delete from survey_to_tag where survey_ID = "
                       + survey_ID + ";")
        cursor.execute("delete from survey_to_question where survey_ID = "
                       + survey_ID + ";")
        cursor.execute("delete from survey_to_participant where survey_ID = "
                       + survey_ID + ";")
        cursor.execute("delete from survey where ID = " + survey_ID + ";")
        cursor.execute("delete from tag where type = 'name' && value = '"
                       + name + "';")
        mydb.commit()
    
    return 'success'


def survey_get(name):  # noqa: E501
    """retreives the survey with a given name

    :param name: the name for a survey
    :type name: str
    
    PRE: 'name' is already present in the database
    POST: output is in the following JSON format
          { "url": str,
            "instructor": str,
            "participants": [{"name": str,
                              "address": str}, ...],
            "questions": [{"helpText": str,
                           "mandatory": bool,
                           "group": str,
                           "type": str,
                           "text": str}, ...],
            tag name 1: str,
            tag name 2: str, ...}
    """
    
    # Retrieve ID of survey with "name"
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID " \
                   "= tag.ID && tag.type = 'name' && tag.value = '"
                   + name + "';")
    survey_ID = cursor.fetchone()
    survey = {}     # Initialize survey dictionary to return
    
    # Get survey only if ID is found for "name"
    if survey_ID:
        survey_ID = str(survey_ID[0])
        
        # Add survey URL to dictionary
        cursor.execute("select url from survey where ID = " + survey_ID + ";")
        survey['url'] = cursor.fetchone()[0]
        
        # Add survey instructor to dictionary
        cursor.execute("select name from instructor, survey where " \
                       "survey.ID = " + survey_ID + " && " \
                       "survey.instructor_ID = instructor.ID;")
        survey['instructor'] = cursor.fetchone()[0]
        
        # Add each participant's name and address to dictionary
        survey['participants'] = []
        cursor.execute("select name, address from participant, " \
                       "survey_to_participant where participant.ID = " \
                       "survey_to_participant.participant_ID && " \
                       "survey_to_participant.survey_ID = " + survey_ID + ";")
        for participant in cursor.fetchall():
            new_part = {}
            new_part['name'] = participant[0]
            new_part['address'] = participant[1]
            survey['participants'].append(new_part)
        
        # Add fields of each question to dictionary
        survey['questions'] = []
        cursor.execute("select helpText, mandatory, `group`, type, text " \
                       "from question, survey_to_question where " \
                       "survey_to_question.survey_ID = " + survey_ID
                       + " && survey_to_question.question_ID = question.ID;")
        for question in cursor.fetchall():
            new_quest = {}
            new_quest['helpText'] = question[0]
            new_quest['mandatory'] = question[1]
            new_quest['group'] = question[2]
            new_quest['type'] = question[3]
            new_quest['text'] = question[4]
            survey['questions'].append(new_quest)
        
        # Add each tag's name and value to dictionary
        cursor.execute("select type, value from tag, survey_to_tag where " \
                       "survey_to_tag.survey_ID = " + survey_ID + " && " \
                       "survey_to_tag.tag_ID = tag.ID;")
        for tag in cursor.fetchall():
            survey[tag[0]] = tag[1]
    
    return survey


def survey_put():  # noqa: E501
    """updates the info of a survey with a given name
       if no survey with the given name exists, then a new one is created

    :rtype: str
    
    PRE: input is in the following JSON format
         { "URL": str,
           "instructor": str,
           "participants": [{"name": str,
                             "address": str}, ...],
           "questions": [{"ID": int,
                          "helpText": str,
                          "mandatory": bool,
                          "group": str,
                          "type": str,
                          "text": str}, ...],
           "name": str,
           tag name 2: str,
           tag name 3: str, ...}
        instructor is already present in database
        question types follow evaluation form standard
        tag types have unique names and include
            'name', 'description', 'welcometext', 'endtext',
            'email_invite', 'email_remind', 'email_register', and 'email_confirm'
    """
    
    # Retrieve the ID of the current user
    cursor.execute("select ID from user where `e-mail` = '"
                   + session.get('email') + "';")
    user_ID = str(cursor.fetchone()[0])
    
    # An instructor key must be in the input
    if 'instructor' not in request.json.keys():
        return 'no matching instructor found'
    # Retrieve ID of survey instructor
    cursor.execute("select ID from instructor where name = '"
                   + request.json['instructor'] + "';")
    instructor_ID = cursor.fetchone()
    if instructor_ID:
        # If instructor with name exists, use its ID
        instructor_ID = str(instructor_ID[0])
    else:
        # Otherwise, make a new instructor row
        # Row ID is 1 higher than the current maximum instructor ID
        cursor.execute("select max(ID) from instructor;")
        instructor_ID = cursor.fetchone()[0]
        # Use '1' if no instructor IDs are in table
        instructor_ID = str(instructor_ID + 1) if instructor_ID else '1'
        cursor.execute("insert into instructor values (" + instructor_ID
                       + ", '" + request.json['instructor'] + "', '')")
    
    survey_ID = ''
    
    cursor.execute("select value from tag where type = 'name' && value = '"
                   + request.json['name'] + "';")
    if cursor.fetchone():
        # If survey with name does exist, get its survey_ID
        # and update the survey row
        cursor.execute("select survey_ID from survey_to_tag, tag where " \
                       "tag_ID = tag.ID && tag.type = 'name' && tag.value = '"
                       + request.json['name'] + "';")
        survey_ID = str(cursor.fetchone()[0])
        cursor.execute("update survey set URL = '" + request.json['URL']
                       + "', instructor_ID = " + instructor_ID
                       + ", user_ID = " + user_ID + " where ID = "
                       + survey_ID + ";")
    else:
        # If survey with name does not exist, make new survey and tag rows
        # Survey and tag row IDs are 1 higher than the current maximum IDs
        cursor.execute("select max(ID) from survey;")
        survey_ID = cursor.fetchone()[0]
        survey_ID = str(survey_ID + 1) if survey_ID else '1'
        cursor.execute("insert into survey values (" + survey_ID + ", '"
                       + request.json['URL'] + "', " + instructor_ID + ", "
                       + user_ID + ");")
        cursor.execute("select max(ID) from tag;")
        tag_ID = cursor.fetchone()[0]
        tag_ID = str(tag_ID + 1) if tag_ID else '1'
        cursor.execute("insert into tag values (" + tag_ID + ", 'name', '"
                       + request.json['name'] + "');")
        cursor.execute("insert into survey_to_tag values (" + survey_ID + ", "
                       + tag_ID + ");")
    
    # List of participants that are in the database but not in the request
    old_participants = []
    cursor.execute("select address from participant, " \
                   "survey_to_participant where participant.ID = " \
                   "survey_to_participant.participant_ID && " \
                   "survey_to_participant.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_participants.append(str(row[0]))
    
    for participant in request.json['participants']:
        # Get ID of participant, if available
        cursor.execute("select ID from participant where address = '"
                       + participant['address'] + "';")
        participant_ID = cursor.fetchone()
        if participant_ID:
            # If address in request exists, add to survey_to_participant
            # and remove from old_participants
            cursor.execute("insert ignore into survey_to_participant values ("
                           + survey_ID + ", " + str(participant_ID[0]) + ");")
            if participant['address'] in old_participants:
                old_participants.remove(participant['address'])
        else:
            # If address in request does not exist, make a new participant row
            # Row ID is 1 higher than the current maximum participant ID
            cursor.execute("select max(ID) from participant;")
            participant_ID = cursor.fetchone()[0]
            participant_ID = str(participant_ID + 1) if participant_ID \
                             else '1'
            cursor.execute("insert into participant values ("
                           + participant_ID + ", '" + participant['name']
                           + "', '" + participant['address'] + "');")
            cursor.execute("insert into survey_to_participant values ("
                           + survey_ID + ", " + participant_ID + ");")
    # Remove participants for the survey that were not in request
    for address in old_participants:
        cursor.execute("select ID from participant where address = '"
                       + address + "';")
        participant_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from survey_to_participant where " \
                       "survey_ID = " + survey_ID + " &&  participant_ID = "
                       + participant_ID + ";")
    
    # Questions that are in the database but not in the request
    old_questions = []
    cursor.execute("select ID from question, survey_to_question where " \
                   "question.ID = survey_to_question.question_ID && " \
                   "survey_to_question.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_questions.append(str(row[0]))
    
    for question in request.json['questions']:
        # Find string corresponding to "mandatory" value
        bit = '1' if question['mandatory'] else '0'
        cursor.execute("select ID from question where ID = '"
                       + str(question['ID']) + "';")
        # Get ID of question, if available
        question_ID = cursor.fetchone()
        if question_ID:
            # If question ID in request exists, update the question row,
            # add to survey_to_question, and remove from old_questions
            cursor.execute("update question set helpText = '"
                           + question['helpText'] + "', mandatory = " + bit
                           + ", `group` = '" + question['group']
                           + "', type = '" + question['type'] + "', text = '"
                           + question['text'] + "' where ID = "
                           + str(question_ID[0]) + ";")
            cursor.execute("insert ignore into survey_to_question values ("
                           + survey_ID + ", " + str(question_ID[0]) + ");")
            if str(question_ID[0]) in old_questions:
                old_questions.remove(str(question_ID[0]))
        else:
            # If question ID in request doesn't exist, make a new question row
            # Row ID is 1 higher than current maximum question ID
            cursor.execute("select max(ID) from question;")
            question_ID = cursor.fetchone()[0]
            question_ID = str(question_ID + 1) if question_ID else '1'
            cursor.execute("insert into question values (" + question_ID
                           + ", '" + question['helpText'] + "', " + bit
                           + ", '" + question['group'] + "', '"
                           + question['type'] + "', '" + question['text']
                           + "');")
            cursor.execute("insert into survey_to_question values ("
                           + survey_ID + ", " + question_ID + ");")
    # Remove questions for the survey that were not in request
    for ID in old_questions:
        cursor.execute("delete from survey_to_question where survey_ID = "
                       + survey_ID + " && question_ID = " + ID + ";")
    
    # Tags are any keys in request that are not standard for every survey
    tags = list(set(request.json.keys()) - {'URL', 'instructor', 'participants',
                                            'questions'})
    # Tags that are in the database but not in the request
    old_tags = []
    cursor.execute("select type, value from tag, survey_to_tag where tag.ID " \
                   "= survey_to_tag.tag_ID && survey_to_tag.survey_ID = "
                   + survey_ID + ";")
    for row in cursor.fetchall():
        old_tags.append([str(row[0]), str(row[1])])
    
    for tag in tags:
        # Get ID of tag, if available
        value = request.json[tag]
        cursor.execute("select ID, type from tag where type = '" + tag
                       + "' && value = '" + value + "';")
        tag_ID = cursor.fetchone()
        if tag_ID:
            # If tag type in request exists, add to survey_to_tag
            # and remove it from old tags
            cursor.execute("insert ignore into survey_to_tag values ("
                           + survey_ID + ", " + str(tag_ID[0]) + ");")
            if [tag, value] in old_tags:
                old_tags.remove([tag, value])
        else:
            # If tag type in request does not exist, make a new tag row
            # Row ID is 1 higher than current maximum tag ID
            cursor.execute("select max(ID) from tag;")
            tag_ID = cursor.fetchone()[0]
            tag_ID = str(tag_ID + 1) if tag_ID else '1'
            cursor.execute("insert into tag values (" + tag_ID + ", '" + tag
                           + "', '" + value + "');")
            cursor.execute("insert into survey_to_tag values (" + survey_ID
                           + ", " + tag_ID + ");")
    # Remove tags for the survey that were not in request
    for tag in old_tags:
        cursor.execute("select ID from tag where type = '" + tag[0]
                       + "' && value = '" + tag[1] + "';")
        tag_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from survey_to_tag where survey_ID = "
                       + survey_ID + " && tag_ID = " + tag_ID + ";")
    
    mydb.commit()
    return 'success'


def surveys_get(tag_type=None, tag_value=None):  # noqa: E501
    """retreives a list of the names of the user's surveys,
       optionally for a given tag type and value

    :param tag_type: the type of a survey tag (optional)
    :type tag_type: str
    :param tag_value: the value of a survey tag (optional)
    :type tag_value: str

    :rtype: List[survey names]
    """
    
    survey_names = []                       # Survey names to return
    email = session.get('email')                # Use e-mail of current user
    
    results = []
    if tag_type and tag_value:
        # Retrieve the survey IDs for a given tag value and e-mail address
        cursor.execute("select survey.ID from survey, survey_to_tag, tag, " \
            "user where survey.ID = survey_to_tag.survey_ID && " \
            "survey_to_tag.tag_ID = tag.ID && tag.type = '" + tag_type
            + "' && tag.value = '" + tag_value + "' && survey.user_ID " \
            "= user.ID && user.`e-mail` = '" + email + "';")
        survey_IDs = cursor.fetchall()
        
        # Retrieve the names of the surveys with the given IDs
        for survey_ID in survey_IDs:
            cursor.execute("select value from tag, survey_to_tag where type " \
                "= 'name' && tag.ID = survey_to_tag.tag_ID && " \
                "survey_to_tag.survey_ID = " + str(survey_ID[0]) + ";")
            survey_names.append(cursor.fetchone())
    else:
        # Retrieve the survey names for a given e-mail address
        cursor.execute("select value from tag, survey_to_tag, survey, " \
            "user where type = 'name' && tag.ID = " \
            "survey_to_tag.tag_ID && survey_to_tag.survey_ID = " \
            "survey.ID && survey.user_ID = user.ID && " \
            "user.`e-mail` = '" + email + "';")
        survey_names = cursor.fetchall()
    
    # Return survey names
    return [name[0] for name in survey_names]


def tag_values_get(tag_type):
    """retreives a list of values for a given tag type of the user's surveys

    :param tag_type: the type of a survey tag
    :type tag_type: str

    :rtype: List[tag values]
    """
    
    email = session.get('email')                # Use e-mail of current user
    
    cursor.execute("select value from tag, survey_to_tag, survey, " \
        "user where tag.type = '" + tag_type + "' && tag.ID = " \
        "survey_to_tag.tag_ID && survey_to_tag.survey_ID = survey.ID && " \
        "survey.user_ID = user.ID && user.`e-mail` = '"
        + email + "';")
    
    return [value[0] for value in cursor.fetchall()]


def login_get(key):  # noqa: E501
    """logs in a user with a certain authentication key

    :param key: an authentication key
    :type key: str

    :rtype: str
    """
    
    session['token'] = key
    return validate()


def validate():
    """validates the authentication token received with GET login
    
    POST: if log-in is successful,
          the e-mail address of the user logging in
          if not successful, an error message
    """
    
    # Call the Google API with the authentication token
    r = requests.get(
        'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='
        + session.get('token'))
    if (r.status_code == 200):          # If request is successful
        # Load user's full name and e-mail address into a session object
        data = r.json()
        session['email'] = data['email']
        
        # Add the user to the instructor table if not there
        # User ID is one higher than the current maximum ID
        cursor.execute("select max(ID) from user;")
        user_ID = cursor.fetchone()[0]
        # Use '1' if no user IDs are in table
        user_ID = str(user_ID + 1) if user_ID else '1'
        
        cursor.execute("select * from user where `e-mail` = '"
                       + session.get('email') + "';")
        if not cursor.fetchone():
            # If the user doesn't already exist, insert it
            cursor.execute("insert ignore into user values (" + user_ID
                           + ", '', '" + session.get('email') + "')")
        mydb.commit()
        
        return session.get('email')         # Return the user's e-mail address
    else: 
        return 'INVALID LOGIN'          # Unsuccessful log-in


def publish_get(name):  # noqa: E501
    """publishes the survey with a given name

    :param name: the name for a survey
    :type name: str
    
    PRE: 'name' is already present in database
    """
    
    # Translate survey data into a .txt file
    text, survey_ID, startdate, remind = translate_to_txt(name)
    if not survey_ID:
        return 'invalid survey name'
    
    # Use .txt file to put survey into LimeSurvey database
    enc_text = base64.b64encode(bytes(text, 'utf-8')).decode('utf-8')
    # Import survey with the encoded text
    lime.import_survey(enc_text, name, survey_ID, type='txt')
    
    # Add participants to survey on LimeSurvey database
    participants = []
    cursor.execute("select name, address from participant, " \
                   "survey_to_participant where participant.ID = " \
                   "survey_to_participant.participant_ID && " \
                   "survey_to_participant.survey_ID = " + str(survey_ID) + ";")
    for row in cursor.fetchall():
        # Participant name must be of the form 'firstname lastname'
        first, last = row[0].split(' ')
        participants.append({'email': row[1], 'lastname': last,
                             'firstname': first})
    # Add participants to LimeSurvey participants table
    lime.activate_tokens(survey_ID)
    lime.add_participants(survey_ID, participants)
    # Make survey responses anonymous
    lime.set_survey_property(survey_ID, 'anonymized', 'true')
    
    time_diff = 0           # Default if delay_start is false
    
    if delay_start != []:   # If activation is delayed (default)
        startdate_obj = datetime.strptime(startdate, '%Y-%m-%d %H:%M:%S')
        startdate_obj = timezone('US/Eastern').localize(startdate_obj)
        # Convert the current time to the correct time zone
        now_time = datetime.now(timezone('US/Eastern'))
        # Find the difference between the start time and current time
        time_diff = round((startdate_obj - now_time).total_seconds())
    
        # Set timer to activate survey
        timer = Timer(time_diff, activate_survey, (survey_ID, remind))
        timer.start()
        timers.append(timer)
    else:
        # If not delayed, activate survey immediately
        activate_survey(survey_ID, remind)
    
    return 'success'


def activate_survey(survey_ID, remind):
    """activates the survey with the given ID
    
    :param survey_ID: the ID of the survey being published
    :type survey_ID: str
    :param remind: true iff reminder e-mails are sent
    :type remind: bool
    """
    
    lime.activate_survey(survey_ID)
    # Send invitation e-mails to survey participants
    lime.invite_participants(survey_ID)
    
    if remind:
        # Send reminder e-mails after 3, 6, and 9 days
        for i in range(1, 4):
            # There are 259,200 seconds in a day
            timer = Timer(i*259200, remind_participants, (survey_ID,))
            timer.start()
            timers.append(timer)


def remind_participants(survey_ID):
    """sends reminder e-mails to survey participants
    
    :param survey_ID: the ID of the survey whose participants are reminded
    :type survey_ID: str
    """
    
    lime.remind_participants(survey_ID)


def get_template_text(name, typ):
    """returns text for use as a template

    :param name: the name for a survey
    :type name: str
    :param typ: the type of template to return
    :type typ: str
    
    PRE: 'typ' is a valid template name
    """
    
    # Default response notification text for administrators
    if typ.startswith('admin'):
        return "Hello,<br /><br />A new response was submitted for your " \
               "survey '{SURVEYNAME}'.<br /><br />Check the course " \
               "evaluation system to see the response and its statistics."
    

def translate_to_txt(name):
    """translate the survey with a given name to text that can be
       imported into the LimeSurvey database
    
    :param name: the name for a survey
    :type name: str
    
    PRE: 'name' is already present in database
    """
    
    # Retrieve ID for survey with "name"
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID " \
                   "= tag.ID && tag.type = 'name' && tag.value = '"
                   + name + "';")
    result = cursor.fetchone()
    if not result:          # Return error if no survey with "name" is found
        return None, None, None, None
    survey_ID = str(result[0])
    # Used to retreive the value for a given tag
    value_query = "select value from tag, survey_to_tag where " \
                  "survey_to_tag.survey_ID = " + survey_ID + " && " \
                  "survey_to_tag.tag_ID = tag.ID && tag.type = '{}';"
    
    template = open('template.txt', 'r')
    text = template.readline()      # Output survey text, begins with headers
    lines = template.readlines()    # Text from survey template
    
    # Retrieve optional data info
    cursor.execute(value_query.format('reminderTime'))
    reminderTime = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('beginDate'))
    startdate = '{} {}:00'.format(str(cursor.fetchone()[0]),
                                  reminderTime, ':00')
    cursor.execute(value_query.format('closeDate'))
    expires = '{} {}:00'.format(str(cursor.fetchone()[0]),
                                reminderTime, ':00')
    
    # Retreive general survey info
    cursor.execute(value_query.format('name'))
    title = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('description'))
    description = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('welcometext'))
    welcometext = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('endtext'))
    endtext = str(cursor.fetchone()[0])
    
    # Retrieve e-mail templates
    cursor.execute(value_query.format('email_invite'))
    email_invite = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('email_remind'))
    email_remind = str(cursor.fetchone()[0])
    # Do not remind students if email_remind is empty
    remind = email_remind != ''
    cursor.execute(value_query.format('email_register'))
    email_register = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('email_confirm'))
    email_confirm = str(cursor.fetchone()[0])

    # Add rows containing general info and e-mail templates
    values = [survey_ID, '1', 'Administrator', "\"{}\"".format(expires),
              "\"{}\"".format(startdate), 'admin@teachingevaluations.org', 'N',
              '', 'G', 'N', 'fruity', 'en', '', 'N', 'N', 'N', 'Y', '0', 'N',
              'N', 'N', 'N', 'N', '0', 'N', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N',
              'N', 'admin@teachingevaluations.org', '', '', '15', 'Y', 'B',
              'N', 'X', 'N', 'Y', 'Y', '0', '0', 'N', 'N', '162243', 'en',
              title, description, welcometext, endtext, '', '',
              'Invitation to participate in a survey', email_invite,
              'Reminder to participate in a survey', email_remind,
              'Survey registration confirmation', email_register,
              'Confirmation of your participation in our survey',
              email_confirm, '1', 'Response submission for survey ' + name,
              get_template_text(name, 'admin_notification'),
              'Response submission for survey ' + name,
              get_template_text(name, 'admin_responses'), '0']
    # Replace template text with valid survey info
    for i in range(len(lines)):
        fields = lines[i].split('\t')
        fields[6] = values[i]
        text += '\t'.join(fields)
    
    # Used for determining group IDs
    groups = ['The Instructor', 'The Course', 'Assessment',
              'The Laboratory Experience', 'Open Ended Questions',
              'The Teaching Assessment', 'Online Component Assessment']
    
    questions = []
    # Used to retrieve the field value for a given question
    question_query = "select {} from question where ID = {};"
    
    # Iterate over groups and group numbers
    for i in range(len(groups)):
        # Retrieve IDs for group questions, if any exist
        cursor.execute("select question.ID from question, " \
                       "survey_to_question where " \
                       "survey_to_question.survey_ID = " + survey_ID
                       + " && survey_to_question.question_ID = question.ID " \
                       "&& question.group = '" + groups[i] + "';")
        question_IDs = [str(row[0]) for row in cursor.fetchall()]
        
        # Add questions only if a group contains questions
        if question_IDs:
            # Add row for group header
            questions.append({'id': str(i+1), 'class': 'G', 'type': str(i+1),
                              'name': groups[i], 'relevance': '', 'text': '',
                              'language': 'en', 'mandatory': ''})
            
            # Iterate over questions for each group
            for ID in question_IDs:
                cursor.execute(question_query.format('type', ID))
                typ = str(cursor.fetchone()[0])
                cursor.execute(question_query.format('text', ID))
                txt = str(cursor.fetchone()[0])
                # Get string from mandatory bit
                cursor.execute(question_query.format('mandatory', ID))
                mandatory = str(cursor.fetchone()[0])
                mandatory = 'Y' if int(mandatory) == 1 else 'N'
                
                # Add row for group question
                questions.append({'id': ID, 'class': 'Q', 'type': typ,
                                  'name': 'Q'+ID, 'relevance': '1',
                                  'text': txt, 'language': 'en',
                                  'mandatory': mandatory})

    for q in questions:
        # Add question/group info to survey text
        text += '{}\t\t{}\t{}\t{}\t{}\t{}\t\t{}\t\t{}'.format(q['id'],
                q['class'], q['type'], q['name'], q['relevance'], q['text'],
                q['language'], q['mandatory'])
        if q['class'] == 'Q':           # If row refers to a question
            text += '\tN\t\t0' + '\t'*129 + '\n'
        else:                           # If row refers to a group header
            text += '\t'*132 + '\n'

    # Close template and return values needed for activating the survey
    template.close()
    return text, int(survey_ID), startdate, remind
    

def results_get(cat_type, cat_name):  # noqa: E501
    """retreives a list of results for a given category of surveys

    :param cat_type: the type of category named 'cat_name'
    :type cat_type: str
    :param cat_name: the name of the category to which the surveys pertain
    :type cat_name: str

    :rtype: List[results]
    
    PRE: 'cat_type' is either 'course_section', 'course_designator',
         'instructor', 'unit', 'college', or 'university'
         a tag in the database is of type 'cat_type' and value 'cat_name'
    POST: output is in the following JSON format
          { question 1:
              { survey 1: {"median": float,
                           "mean": float,
                           "std_dev": float,
                           "n": int},
                survey 2: ...},
            question 2: {...}, ...}
    """
    
    stats = {}      # The survey statistics to return
    
    if cat_type == 'instructor':
        # Get the survey IDs for the given instructor
        cursor.execute("select survey.ID from survey, instructor where " \
            "survey.instructor_ID = instructor.ID && instructor.name = '"
            + cat_name + "';")
    else:
        # "cat_type" is a tag, so use the tags table to get the survey IDs
        cursor.execute("select survey.ID from survey, survey_to_tag, tag " \
            "where survey.ID = survey_to_tag.survey_ID && " \
            "survey_to_tag.tag_ID = tag.ID && tag.type = '"
            + cat_type + "' && tag.value = '" + cat_name + "';")
    
    # Check if there are any surveys for "cat_name"
    survey_IDs = cursor.fetchall()
    if not survey_IDs:
        return "no surveys found for category '{}'".format(cat_name)
    
    # Loop through all of "cat_name"'s surveys
    for survey_ID in survey_IDs[0]:
        # Get the survey's name
        cursor.execute("select value from tag, survey_to_tag, survey " \
            "where type = 'name' && tag.ID = survey_to_tag.tag_ID && " \
            "survey_to_tag.survey_ID = " + str(survey_ID) + ";")
        survey_name = cursor.fetchone()[0]
        
        try:
            # Retrieve responses from the LimeSurvey database
            responses = lime.export_responses(survey_ID, heading='full')
        except TypeError:       # Survey has no responses, so try next ID
            continue
        
        for response in responses['responses']:
            # Keys are one level deeper
            response = response[list(response.keys())[0]]
            
            # Use only the question keys of a response
            q_keys = list(set(response.keys()) - {'Response ID', 
                'Date submitted', 'Last page', 'Start language', 'Seed'})
            
            # Add q_key's response to the stats dictionary
            for q_key in q_keys:
                try:
                    q_value = int(response[q_key])  # q_key's response
                # Only 1-5 scale questions permitted
                except (ValueError, TypeError) as e:
                    continue
                
                # Create a question key in stats if not there
                if q_key not in stats:
                    stats[q_key] = {survey_name: [q_value]} \
                                   if cat_type == 'instructor' else \
                                   {cat_name: [q_value]}
                # If applicable, create a survey key in stats if not there
                elif cat_type == 'instructor' and \
                     survey_name not in stats[q_key]:
                    stats[q_key][survey_name] = [q_value]
                # Otherwise, just add q_value
                else:
                    if cat_type == 'instructor':
                        stats[q_key][survey_name].append(q_value)
                    else:
                        stats[q_key][cat_name].append(q_value)
                
    # Loop over each set of responses per category per question
    for question in stats:
        for category in stats[question]:
            # Replace responses with actual statistics
            values = stats[question][category]
            
            # Compute appropriate statistics for values
            # Non-integral values are rounded to 2 places
            stats[question][category] = {
                'median': round(statistics.median(values), 2),
                'mean': round(statistics.mean(values), 2),
                # Standard deviation of response values
                # Cannot be found with only one response
                'std_dev': round(statistics.stdev(values), 2)
                           if len(values) != 1 else 'N/A',
                'n': len(values)    # Number of responses
            }

    return stats
