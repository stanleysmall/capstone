# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAdminsController(BaseTestCase):
    """AdminsController integration test stubs"""

    def test_course_get(self):
        """Test case for course_get

        retreives the info for a specific course
        """
        query_string = [('course_id', 56)]
        response = self.client.open(
            '/teameval/Eval/1.0.0/course',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_course_put(self):
        """Test case for course_put

        updates the info for a specified course
        """
        query_string = [('course_id', 56)]
        response = self.client.open(
            '/teameval/Eval/1.0.0/course',
            method='PUT',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_get(self):
        """Test case for courses_get

        retreives a list of all courses
        """
        query_string = [('teacher_id', 56)]
        response = self.client.open(
            '/teameval/Eval/1.0.0/courses',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_new_course_post(self):
        """Test case for new_course_post

        creates a new course
        """
        response = self.client.open(
            '/teameval/Eval/1.0.0/new_course',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
