# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.test import BaseTestCase


class TestTeachersController(BaseTestCase):
    """TeachersController integration test stubs"""

    def test_login_post(self):
        """Test case for login_post

        
        """
        response = self.client.open(
            '/teameval/Eval/1.0.0/login',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_search_inventory(self):
        """Test case for search_inventory

        retreives a list of all courses
        """
        query_string = [('teacher_id', 56)]
        response = self.client.open(
            '/teameval/Eval/1.0.0/courses',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
