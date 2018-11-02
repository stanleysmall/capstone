import connexion
import six

from swagger_server.models.course import Course  # noqa: E501
from swagger_server import util


def search_inventory(teacher_id):  # noqa: E501
    """retreives a list of all courses

    By passing in the appropriate options, you can search for available inventory in the system  # noqa: E501

    :param teacher_id: the ID for a teacher
    :type teacher_id: int

    :rtype: List[Course]
    """
    return 'do some magic!'
