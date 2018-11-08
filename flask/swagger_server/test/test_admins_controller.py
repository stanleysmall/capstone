# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAdminsController(BaseTestCase):
    """AdminsController integration test stubs"""

    def test_course_delete(self):
        """Test case for course_delete

        deletes a specified course
        """
        query_string = [('name', 'name_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/course',
            method='DELETE',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_course_get(self):
        """Test case for course_get

        retreives the info for a specific course
        """
        query_string = [('name', 'name_example')]
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
        query_string = [('name', 'name_example')]
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
        query_string = [('id', 'id_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/courses',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_create_user_post(self):
        """Test case for create_user_post

        adds a user to the database
        """
        query_string = [('key', 'key_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/create_user',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_login_get(self):
        """Test case for login_get

        retrieves a token for a certain authentication key
        """
        query_string = [('key', 'key_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/login',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_new_course_post(self):
        """Test case for new_course_post

        creates a new course
        """
        course = Course()
        response = self.client.open(
            '/teameval/Eval/1.0.0/new_course',
            method='POST',
            data=json.dumps(course),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_results_get(self):
        """Test case for results_get

        retreives a list of survey results
        """
        query_string = [('class_name', 'class_name_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_results_post(self):
        """Test case for results_post

        edits a list of survey results
        """
        query_string = [('class_name', 'class_name_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='POST',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
