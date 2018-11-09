import connexion
import six

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server import util


def course_delete(name):  # noqa: E501
    """deletes a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: str

    :rtype: str
    """
    return 'do some magic!'


def course_get(name):  # noqa: E501
    """retreives the info for a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: str

    :rtype: Course
    """
    return 'do some magic!'


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
    return 'do some magic!'


def create_user_post(key):  # noqa: E501
    """adds a user to the database

     # noqa: E501

    :param key: an authentication key
    :type key: str

    :rtype: str
    """
    return 'do some magic!'


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
