import connexion
import six
import mysql.connector
from flask import jsonify, request

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server import util

mydb = mysql.connector.connect(host='127.0.0.1',
                               port=4306,
                               database='mydb',
                               user='root',
                               password='root')
cursor = mydb.cursor()


def survey_delete(name):  # noqa: E501
    """deletes the survey with a given name

     # noqa: E501

    :param name: the name for a survey
    :type name: str

    :rtype: str
    
    PRE: tag type must be called 'name'
    """
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.name = '" + name + "';")
    survey_ID = cursor.fetchone()
    
    if survey_ID:
        survey_ID = str(survey_ID[0])
        cursor.execute("delete from survey_to_tag where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from response where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey_to_question where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from `survey_to_e-mail` where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey where ID = " + survey_ID + ";")
        cursor.execute("delete from tag where type = 'name' && name = '" + name + "';")
        mydb.commit()
    
    return 'success'


def survey_get(name):  # noqa: E501
    """retreives the survey with a given name

     # noqa: E501

    :param name: the name for a survey
    :type name: str
    
    PRE: tag type must be called 'name'
    POST: output is in the following JSON format
          { "url": str,
            "instructor": str,
            "e-mails": [str, ...],
            "questions": [{"helpText": str,
                           "mandatory": bool,
                           "group": str,
                           "type": str,
                           "text": str}, ...],
            tag 1: str,
            tag 2: str, ...}
    """
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.name = '" + name + "';")
    survey_ID = cursor.fetchone()
    survey = {}
    
    if survey_ID:
        survey_ID = str(survey_ID[0])
        
        cursor.execute("select url from survey where ID = " + survey_ID + ";")
        survey['url'] = cursor.fetchone()[0]
        
        cursor.execute("select name from instructor, survey where survey.ID = " + survey_ID + " && survey.instructor_ID = instructor.ID;")
        survey['instructor'] = cursor.fetchone()[0]
        
        survey['e-mails'] = []
        cursor.execute("select address from `e-mail`, `survey_to_e-mail` where `e-mail`.ID = `survey_to_e-mail`.`e-mail_ID` && `survey_to_e-mail`.survey_ID = " + survey_ID + ";")
        for address in cursor.fetchall():
            survey['e-mails'].append(address[0])
            
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
        
        cursor.execute("select type, name from tag, survey_to_tag where survey_to_tag.survey_ID = " + survey_ID + " && survey_to_tag.tag_ID = tag.ID;")
        for tag in cursor.fetchall():
            survey[tag[0]] = tag[1]
    
    return jsonify(survey)


def survey_put():  # noqa: E501
    """updates the info of a survey with a given name
       if no survey with the given name exists, then a new one is created

     # noqa: E501

    :rtype: str
    
    PRE: input is in the following JSON format
         { "URL": str,
           "instructor": str,
           "e-mails": [str, ...],
           "questions": [{"ID": int,
                          "helpText": str,
                          "mandatory": bool,
                          "group": str,
                          "type": str,
                          "text": str}, ...],
           "name": str,
           tag 2: str,
           tag 3: str, ...}
        instructor is already present in database
        question IDs follow evaluation form standards
        tag types have unique names
    """
    
    cursor.execute("select ID from instructor where name = '" + request.json['instructor'] + "';")
    instructor_ID = str(cursor.fetchone()[0])
    survey_ID = ''
    
    cursor.execute("select name from tag where type = 'name' && name = '" + request.json['name'] + "';")
    if cursor.fetchone():
        # If survey with name does exist, get its survey_ID and update the survey row
        cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.type = 'name' && tag.name = '" +  request.json['name'] + "';")
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
    
    old_addresses = []
    cursor.execute("select address from `e-mail`, `survey_to_e-mail` where `e-mail`.ID = `survey_to_e-mail`.`e-mail_ID` && `survey_to_e-mail`.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_addresses.append(str(row[0]))
    for address in request.json['e-mails']:
        cursor.execute("select ID from `e-mail` where address = '" + address + "';")
        email_ID = cursor.fetchone()
        if email_ID:
            # If address in request exists, remove it from old addresses
            old_addresses.remove(address)
        else:
            # If address in request does not exist, make a new e-mail row and get its ID
            cursor.execute("select max(ID) from `e-mail`;")
            email_ID = str(cursor.fetchone()[0] + 1)
            cursor.execute("insert into `e-mail` values (" + email_ID + ", '" + address + "');")
            cursor.execute("insert into `survey_to_e-mail` values (" + survey_ID + ", " + email_ID + ");")
    # Remove addresses for the survey that were not in request
    for address in old_addresses:
        cursor.execute("select ID from `e-mail` where address = '" + address + "';")
        email_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from `survey_to_e-mail` where survey_ID = " + survey_ID + " && `e-mail_ID` = " + email_ID + ";")
    
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
    
    tags = list(set(request.json.keys()) - {'URL', 'instructor', 'e-mails', 'questions', 'name'})
    old_tags = []
    cursor.execute("select type from tag, survey_to_tag where tag.ID = survey_to_tag.tag_ID && survey_to_tag.survey_ID = " + survey_ID + ";")
    for row in cursor.fetchall():
        old_questions.append(str(row[0]))
    for tag in tags:
        cursor.execute("select ID, type from tag where type = '" + tag + "';")
        tag_ID = cursor.fetchone()
        if tag_ID:
            # If tag type in request exists, update the tag row and remove it from old tags
            cursor.execute("update tag set type = '" + tag + "', name = '" + request.json[tag] + "' where ID = " + str(tag_ID[0]) + ";")
            old_tags.remove(tag)
        else:
            # If tag type in request does not exist, make a new tag row and get its ID
            cursor.execute("select max(ID) from tag;")
            tag_ID = str(cursor.fetchone()[0] + 1)
            cursor.execute("insert into tag values (" + tag_ID + ", '" + tag + "', '" + request.json[tag] + "');")
            cursor.execute("insert into survey_to_tag values (" + survey_ID + ", " + tag_ID + ");")
    # Remove tags for the survey that were not in request
    for tag in old_tags:
        cursor.execute("select ID from tag where type = '" + tag + "';")
        tag_ID = str(cursor.fetchone()[0])
        cursor.execute("delete from survey_to_tag where survey_ID = " + survey_ID + " && tag_ID = " + tag_ID + ";")
    
    mydb.commit()
    return 'success'


def surveys_get(name):  # noqa: E501
    """retreives a list of all survey names

     # noqa: E501

    :param id: the name for a teacher/administrator
    :type id: str

    :rtype: List[survey names]
    """
    
    surveys = []
    cursor.execute("select tag.name from tag, survey_to_tag, survey, instructor where type = 'name' && tag.ID = survey_to_tag.tag_ID && survey_to_tag.survey_ID = survey.ID && survey.instructor_ID = instructor.ID && instructor.name = '" + name + "';")
    for survey in cursor.fetchall():
        surveys.append(survey[0])
    
    return surveys


def create_user_post():  # noqa: E501
    """adds a user to the database

     # noqa: E501

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

     # noqa: E501

    :param key: an authentication key
    :type key: str

    :rtype: str
    """

    return 'do some magic!'


def results_get(group_type, name):  # noqa: E501
    """retreives a list of results for a given survey or professor

     # noqa: E501

    :param group_type: the type of group for 'name' (e.g. 'faculty unit', 'university')
    :type group: str
    
    :param name: the name of the group with the survey results
                 (a survey name if 'cat_type' is 'all')
    :type name: str

    :rtype: List[results]
    
    PRE: cat must be either 'survey' or 'instructor'
    POST: output is in the following JSON format
          { "surveys": [ {"name": str,
                          "questions": [{"text": str,
                                         "response": str}, ...]}, ...] }
    """
    
    return 'do some magic!'
