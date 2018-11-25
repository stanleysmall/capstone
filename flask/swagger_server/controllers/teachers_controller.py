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


def course_delete(name):  # noqa: E501
    """deletes all surveys for a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: str

    :rtype: str
    
    PRE: tag name must be called 'course'
    """
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.name = 'course' && tag.type = '" + name + "';")
    survey_IDs = cursor.fetchall()
    
    for survey_ID in survey_IDs:
        survey_ID = str(survey_ID[0])
        cursor.execute("delete from survey_to_tag where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from response where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey_to_question where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from `e-mail` where survey_ID = " + survey_ID + ";")
        cursor.execute("delete from survey where ID = " + survey_ID + ";")
    cursor.execute("delete from tag where name = 'course' && type = '" + name + "';")
    
    mydb.commit()
    return 'success'


def course_get(name):  # noqa: E501
    """retreives the surveys for a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: str
    
    PRE: tag name must be called 'course'
    POST: output is in the following JSON format
          { "surveys": [{"url": str,
                         "instructor": str,
                         "e-mails": [str, ...],
                         "questions": [{"helpText": str,
                                        "mandatory": bool,
                                        "group": str,
                                        "type": str,
                                        "text": str}, ...],
                         tag 1: str,
                         tag 2: str, ...}, ...] }
    """
    
    cursor.execute("select survey_ID from survey_to_tag, tag where tag_ID = tag.ID && tag.name = 'course' && tag.type = '" + name + "';")
    survey_IDs = cursor.fetchall()
    
    surveys = {'surveys': []}
    
    for survey_ID in survey_IDs:
        survey = {}
        survey_ID = str(survey_ID[0])
        
        cursor.execute("select url from survey where ID = " + survey_ID + ";")
        survey['url'] = cursor.fetchone()[0]
        
        cursor.execute("select name from instructor, survey where survey.ID = " + survey_ID + " && survey.instructor_ID = instructor.ID;")
        survey['instructor'] = cursor.fetchone()[0]
        
        survey['emails'] = []
        cursor.execute("select address from `e-mail` where survey_ID = " + survey_ID + ";")
        for address in cursor.fetchall():
            survey['emails'].append(address[0])
            
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
        
        cursor.execute("select name, type from tag, survey_to_tag where survey_to_tag.survey_ID = " + survey_ID + " && survey_to_tag.tag_ID = tag.ID;")
        for tag in cursor.fetchall():
            survey[tag[0]] = tag[1]
        
        surveys['surveys'].append(survey)
    
    return jsonify(surveys)


def course_put(name):  # noqa: E501
    """updates the info for a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: str

    :rtype: str
    """
    return 'do some magic!'


def courses_get(id):  # noqa: E501
    """retreives a list of all courses

     # noqa: E501

    :param id: the ID for a teacher/administrator
    :type id: str

    :rtype: List[Course]
    """
    
    courses = []
    cursor.execute("select type from tag, survey_to_tag, survey where name = 'course' && tag.ID = survey_to_tag.tag_ID && survey_to_tag.survey_ID = survey.ID && survey.instructor_ID = " + id + ";")
    for course in cursor.fetchall():
        courses.append(course[0])
    
    return courses


def create_user_post(key):  # noqa: E501
    """adds a user to the database

     # noqa: E501

    :param key: a user with an authentication key
    :type key: str

    :rtype: str
    
    PRE: input is in the following JSON format
         { "name": str, "key": str }
    TODO: how to handle authentication key (I'm assuming the key is the token)
    """
    
    cursor.execute("alter table instructor modify column ID INT AUTO_INCREMENT;")
    cursor.execute("insert into instructor (name, token) values ('" + request.json['name'] + "', '" + request.json['key'] + "');")
    
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


def new_course_post(course):  # noqa: E501
    """creates a new course

     # noqa: E501

    :param course:
    :type course: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        course = Course.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def results_get(class_name):  # noqa: E501
    """retreives a list of survey results for a specified course

     # noqa: E501

    :param class_name: the name of the class with the results
    :type class_name: str

    :rtype: List[Result]
    """
    return 'do some magic!'


def results_post(class_name):  # noqa: E501
    """edits a list of survey results for a specified course

     # noqa: E501

    :param class_name: the name of the class whose results are changed
    :type class_name: str

    :rtype: str
    """
    return 'do some magic!'
