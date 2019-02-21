import connexion
import six
import mysql.connector
import base64
from flask import jsonify, request

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server import util
from swagger_server.lime_py_api.limesurvey import Api

lime = Api('http://0.0.0.0:5000/index.php/admin/remotecontrol', 'admin', 'password')

mydb = mysql.connector.connect(host='10.5.0.6',
                               port=3306,
                               database='mydb',
                               user='root',
                               password='root')
cursor = mydb.cursor()


def survey_delete(name):  # noqa: E501
    """deletes the survey with a given name

    :param name: the name for a survey
    :type name: str

    :rtype: str
    
    PRE: tag type must be called 'name'
    """
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.value = '" + name + "';")
    survey_ID = cursor.fetchone()
    
    if survey_ID:
        survey_ID = str(survey_ID[0])
        cursor.execute("delete from survey_to_tag where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from response where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey_to_question where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey_to_participant where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey where ID = " + survey_ID + ";")
        cursor.execute("delete from tag where type = 'name' && value = '" + name + "';")
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
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.value = '" + name + "';")
    survey_ID = cursor.fetchone()
    survey = {}
    
    if survey_ID:
        survey_ID = str(survey_ID[0])
        
        cursor.execute("select url from survey where ID = " + survey_ID + ";")
        survey['url'] = cursor.fetchone()[0]
        
        cursor.execute("select name from instructor, survey where survey.ID = " + survey_ID + " && survey.instructor_ID = instructor.ID;")
        survey['instructor'] = cursor.fetchone()[0]
        
        survey['participants'] = []
        cursor.execute("select name, address from participant, survey_to_participant where participant.ID = survey_to_participant.participant_ID && survey_to_participant.survey_ID = " + survey_ID + ";")
        for participant in cursor.fetchall():
            new_part = {}
            new_part['name'] = participant[0]
            new_part['address'] = participant[1]
            survey['participants'].append(new_part)
            
        survey['questions'] = []
        cursor.execute("select helpText, mandatory, `group`, type, text from question, survey_to_question where survey_to_question.survey_ID = " + survey_ID + " && survey_to_question.question_ID = question.ID;")
        for question in cursor.fetchall():
            new_quest = {}
            new_quest['helpText'] = question[0]
            new_quest['mandatory'] = question[1]
            new_quest['group'] = question[2]
            new_quest['type'] = question[3]
            new_quest['text'] = question[4]
            survey['questions'].append(new_quest)
        
        cursor.execute("select type, value from tag, survey_to_tag where survey_to_tag.survey_ID = " + survey_ID + " && survey_to_tag.tag_ID = tag.ID;")
        for tag in cursor.fetchall():
            survey[tag[0]] = tag[1]
    
    return jsonify(survey)


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
    
    cursor.execute("select ID from instructor where name = '" + request.json['instructor'] + "';")
    instructor_ID = str(cursor.fetchone()[0])
    survey_ID = ''
    
    cursor.execute("select value from tag where type = 'name' && value = '" + request.json['name'] + "';")
    if cursor.fetchone():
        # If survey with name does exist, get its survey_ID and update the survey row
        cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.value = '" +  request.json['name'] + "';")
        survey_ID = str(cursor.fetchone()[0])
        cursor.execute("update survey set URL = '" + request.json['URL'] + "', instructor_ID = " + instructor_ID + " where ID = " + survey_ID + ";")
    else:
        # If survey with name does not exist, make a new survey row and get its ID, and make a new tag row
        cursor.execute("select max(ID) from survey;")
        survey_ID = str(cursor.fetchone()[0] + 1)
        cursor.execute("insert into survey values (" + survey_ID + ", '" + request.json['URL'] + "', " + instructor_ID + ");")
        cursor.execute("select max(ID) from tag;")
        tag_ID = str(cursor.fetchone()[0] + 1)
        cursor.execute("insert into tag values (" + tag_ID + ", 'name', '" + request.json['name'] + "');")
        cursor.execute("insert into survey_to_tag values (" + survey_ID + ", " + tag_ID + ");")
    
    old_participants = []
    cursor.execute("select address from participant, survey_to_participant where participant.ID = survey_to_participant.participant_ID && survey_to_participant.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_participants.append(str(row[0]))
    for participant in request.json['participants']:
        cursor.execute("select ID from participant where address = '" + participant['address'] + "';")
        participant_ID = cursor.fetchone()
        if participant_ID:
            # If address in request exists, update the participant row and remove it from old participants
            cursor.execute("update participant set name = '" + participant['name'] + "', address = '" + participant['address'] + "';")
            old_participants.remove(participant)
        else:
            # If address in request does not exist, make a new participant row and get its ID
            cursor.execute("select max(ID) from participant;")
            participant_ID = str(cursor.fetchone()[0] + 1)
            cursor.execute("insert into participant values (" + participant_ID + ", '" + participant['name'] + "', '" + participant['address'] + "');")
            cursor.execute("insert into survey_to_participant values (" + survey_ID + ", " + participant_ID + ");")
    # Remove participants for the survey that were not in request
    for address in old_participants:
        cursor.execute("select ID from participant where address = '" + address + "';")
        participant_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from survey_to_participant where survey_ID = " + survey_ID + " &&  participant_ID = " + participant_ID + ";")
    
    old_questions = []
    cursor.execute("select ID from question, survey_to_question where question.ID = survey_to_question.question_ID && survey_to_question.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_questions.append(str(row[0]))
    for question in request.json['questions']:
        bit = '1' if question['mandatory'] else '0'
        cursor.execute("select ID from question where ID = '" + str(question['ID']) + "';")
        question_ID = cursor.fetchone()
        if question_ID:
            # If question ID in request exists, update the question row and remove it from old questions
            cursor.execute("update question set helpText = '" + question['helpText'] + "', mandatory = " + bit + ", `group` = '" + question['group'] + "', type = '" + question['type'] + "', text = '" + question['text'] + "' where ID = " + str(question_ID[0]) + ";")
            old_questions.remove(question_ID)
        else:
            # If question ID in request does not exist, make a new question row and get its ID
            cursor.execute("select max(ID) from question;")
            question_ID = str(cursor.fetchone()[0] + 1)
            cursor.execute("insert into question values (" + question_ID + ", '" + question['helpText'] + "', " + bit + ", '" + question['group'] + "', '" + question['type'] + "', '" + question['text'] + "');")
            cursor.execute("insert into survey_to_question values (" + survey_ID + ", " + question_ID + ");")
    # Remove questions for the survey that were not in request
    for ID in old_questions:
        cursor.execute("delete from response where survey_ID = " + survey_ID + " && question_ID = " + ID + ";")
        cursor.execute("delete from survey_to_question where survey_ID = " + survey_ID + " && question_ID = " + ID + ";")
    
    tags = list(set(request.json.keys()) - {'URL', 'instructor', 'participants', 'questions'})
    old_tags = []
    cursor.execute("select type, value from tag, survey_to_tag where tag.ID = survey_to_tag.tag_ID && survey_to_tag.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_tags.append([str(row[0]), str(row[1])])
    for tag in tags:
        value = request.json[tag]
        cursor.execute("select ID, type from tag where type = '" + tag + "' && value = '" + value + "';")
        tag_ID = cursor.fetchone()
        if tag_ID:
            # If tag type in request exists, remove it from old tags
            old_tags.remove([tag, value])
        else:
            # If tag type in request does not exist, make a new tag row and get its ID
            cursor.execute("select max(ID) from tag;")
            tag_ID = str(cursor.fetchone()[0] + 1)
            cursor.execute("insert into tag values (" + tag_ID + ", '" + tag + "', '" + value + "');")
            cursor.execute("insert into survey_to_tag values (" + survey_ID + ", " + tag_ID + ");")
    # Remove tags for the survey that were not in request
    for tag in old_tags:
        cursor.execute("select ID from tag where type = '" + tag[0] + "' && value = '" + tag[1] + "';")
        tag_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from survey_to_tag where survey_ID = " + survey_ID + " && tag_ID = " + tag_ID + ";")
    
    mydb.commit()
    return 'success'


def surveys_get(name=None):  # noqa: E501
    """retreives a list of survey names, optionally for a given instructor
       if 'instructor' is None, retreives all survey names

    :param id: the name for an instructor
    :type id: str

    :rtype: List[survey names]
    """
    
    surveys = []
    if name:
        cursor.execute("select tag.value from tag, survey_to_tag, survey, instructor where type = 'name' && tag.ID = survey_to_tag.tag_ID && survey_to_tag.survey_ID = survey.ID && survey.instructor_ID = instructor.ID && instructor.name = '" + name + "';")
    else:
        cursor.execute("select tag.value from tag where type = 'name';")
    for survey in cursor.fetchall():
        surveys.append(survey[0])
    
    return surveys


def create_user_post():  # noqa: E501
    """adds a user to the database

    :param key: a user with an authentication key
    :type key: str

    :rtype: str
    
    PRE: input is in the following JSON format
         { "name": str, "key": str }
    """
    
    
    
    mydb.commit();
    return 'success'


def login_get(key):  # noqa: E501
    """retrieves a token for a certain authentication key

    :param key: an authentication key
    :type key: str

    :rtype: str
    """

    return 'do some magic!'


def publish_get(name):  # noqa: E501
    """publishes the survey with a given name

    :param name: the name for a survey
    :type name: str
    
    PRE: 'name' is already present in database
    """
    
    # Translate survey data into a .txt file
    text, survey_ID = translate_to_txt(name)
    
    # Use .txt file to put survey into LimeSurvey database
    enc_text = base64.b64encode(bytes(text, 'utf-8')).decode('utf-8')
    lime.import_survey(enc_text, name, int(survey_ID), type='txt')
    
    # Add participants to survey on database
    participants = []
    cursor.execute("select name, address from participant, survey_to_participant where participant.ID = survey_to_participant.participant_ID && survey_to_participant.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        first, last = row[0].split(' ')
        participants.append({'email': row[1], 'lastname': last, 'firstname': first})
    
    # Activate survey on LimeSurvey
    
    return 'success'


def get_template_text(name, typ):
    """returns text for use as a template

    :param name: the name for a survey
    :type name: str
    :param typ: the type of template to return
    :type typ: str
    
    PRE: 'typ' is a valid template name
    """
    
    # How should administrator notifications be written?
    if typ.startswith('admin'):
        return """Hello,<br /><br />A new response was submitted for your survey '{SURVEYNAME}'.<br /><br />
                  Check the course evaluation system to see the response and its statistics."""
    

def translate_to_txt(name):
    """translate the survey with a given name to a text file that can be
       imported into the LimeSurvey database
    
    :param name: the name for a survey
    :type name: str
    
    PRE: 'name' is already present in database
    """
    
    fil = open(name + '.txt', 'w')
    template = open('template.txt', 'r')
    text = template.readline()
    lines = template.readlines()
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.value = '" + name + "';")
    survey_ID = str(cursor.fetchone()[0])
    value_query = "select value from tag, survey_to_tag where survey_to_tag.survey_ID = " + survey_ID + " && survey_to_tag.tag_ID = tag.ID && tag.type = '{}';"
    
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
    cursor.execute(value_query.format('email_register'))
    email_register = str(cursor.fetchone()[0])
    cursor.execute(value_query.format('email_confirm'))
    email_confirm = str(cursor.fetchone()[0])

    # Add rows containing general info and e-mail templates
    values = [survey_ID, '1', 'Administrator', 'your-email@example.net', 'N', '', 'G', 'N', 'fruity', 'en', '', 'N', 'N', 'N', 'Y', '0', 'N', 'N', 'N', 'N', 'N', '0', 'N', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'your-email@example.net', '', '', '15', 'Y', 'B', 'N', 'X', 'N', 'Y', 'Y', '0', '0', 'N', 'N', '162243', 'en', title, description, welcometext, endtext, '', '', 'Invitation to participate in a survey', email_invite, 'Reminder to participate in a survey', email_remind, 'Survey registration confirmation', email_register, 'Confirmation of your participation in our survey', email_confirm, '1', 'Response submission for survey ' + name, get_template_text(name, 'admin_notification'), 'Response submission for survey ' + name, get_template_text(name, 'admin_responses'), '0']
    for i in range(len(lines)):
        fields = lines[i].split('\t')
        fields[6] = values[i]
        text += '\t'.join(fields)
    
    groups = ['The Instructor', 'The Course', 'Assessment', 'The Laboratory Experience', 'Open Ended Questions', 'The Teaching Assessment', 'Online Component Assessment']
    questions = []
    question_query = "select {} from question where ID = {};"
    
    # Iterate over groups and group numbers
    for i in range(len(groups)):
        cursor.execute("select question.ID from question, survey_to_question where survey_to_question.survey_ID = " + survey_ID + " && survey_to_question.question_ID = question.ID && question.group = '" + groups[i] + "';")
        question_IDs = [str(row[0]) for row in cursor.fetchall()]
        
        if question_IDs:
            questions.append({'id': str(i), 'class': 'G', 'type': '1', 'name': groups[i], 'relevance': '', 'text': '', 'language': 'en', 'mandatory': ''})
            
            # Iterate over questions for each group
            for ID in question_IDs:
                cursor.execute(question_query.format('type', ID))
                typ = str(cursor.fetchone()[0])
                cursor.execute(question_query.format('text', ID))
                txt = str(cursor.fetchone()[0])
                cursor.execute(question_query.format('mandatory', ID))
                mandatory = str(cursor.fetchone()[0])
                mandatory = 'Y' if int(mandatory) == 1 else 'N'
                
                questions.append({'id': ID, 'class': 'Q', 'type': typ, 'name': 'Q'+ID, 'relevance': '1', 'text': txt, 'language': 'en', 'mandatory': mandatory})

    for q in questions:
        text += '{}\t\t{}\t{}\t{}\t{}\t{}\t\t{}\t\t{}'.format(q['id'], q['class'], q['type'], q['name'], q['relevance'], q['text'], q['language'], q['mandatory'])
        if q['class'] == 'Q':
            text += '\tN\t\t0' + '\t'*129 + '\n'
        else:
            text += '\t'*132 + '\n'

    fil.write(text)
    return text, survey_ID
    
    
def translate_responses(responses):
    """translate the responses from JSON to data that can be
       imported into the back end database
          
    :param responses: the responses for a survey
    :type name: str
    
    PRE: 'responses' is in JSON format
    """
    
    return 0


def results_get(instructor=None):  # noqa: E501
    """retreives a list of results, optionally for a given instructor
       if 'instructor' is None, retrieves results for all surveys

    :param instructor: the instructor to which the results pertain
    :type group: str

    :rtype: List[results]
    
    PRE: 'instructor' is already present in database if not None
    POST: output is in the following JSON format
          { "surveys": [ {"name": str,
                          "questions": [{"text": str,
                                         "response": str}, ...]}, ...] }
    """
    
    # Retrieve responses from the LimeSurvey database
    responses = {}
    
    # Insert responses into back-end database
    translate_responses(responses)
    
    # Compute statistics and return them
    
    return 'do some magic!'
