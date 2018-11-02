import connexion
import six

from swagger_server.models.course import Course  # noqa: E501
from swagger_server import util


def course_delete(name):  # noqa: E501
    """deletes a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: int

    :rtype: str
    """
    return 'do some magic!'


def course_get(name):  # noqa: E501
    """retreives the info for a specific course

     # noqa: E501

    :param name: the name for a course
    :type name: int

    :rtype: Course
    """
    return 'do some magic!'


def course_put(name):  # noqa: E501
    """updates the info for a specified course

     # noqa: E501

    :param name: the name for a course
    :type name: int

    :rtype: str
    """
    return 'do some magic!'


def courses_get(id):  # noqa: E501
    """retreives a list of all courses

     # noqa: E501

    :param id: the ID for a teacher/administrator
    :type id: int

    :rtype: List[Course]
    """
    return 'do some magic!'


def new_course_post(course=None):  # noqa: E501
    """creates a new course

     # noqa: E501

    :param course: 
    :type course: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        course = Course.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
