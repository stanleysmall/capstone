# coding: utf-8

from __future__ import absolute_import

import mysql.connector
from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server.test import BaseTestCase

class TestTeachersController(BaseTestCase):
    """TeachersController integration test stubs"""
    
    @classmethod
    def setUpClass(cls):
        cls.mydb = mysql.connector.connect(host='10.5.0.6',
                                           port=3306,
                                           database='mydb',
                                           user='root',
                                           password='root')
        cls.cursor = cls.mydb.cursor()
        
    def setUp(self):
        with open('swagger_server/test/insert_mock_data.sql', 'r') as f:
            for line in f.readlines():
                self.cursor.execute(line)
            self.mydb.commit()
    
    def tearDown(self):
        with open('swagger_server/test/delete_mock_data.sql', 'r') as f:
            for line in f.readlines():
                self.cursor.execute(line)
            self.mydb.commit()

    def test_survey_delete_valid(self):
        """Test case for survey_delete

        deletes the survey with a given name
        'name' is a valid survey name
        """
        
        query_string = [('name', 'COS 140 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='DELETE',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.cursor.execute("select * from survey_to_tag where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from response where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from survey_to_question where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from survey_to_participant where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from survey where ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from tag where type = 'name' && value = 'COS 140 001';")
        self.assertEqual(len(self.cursor.fetchall()), 0)
    
    def test_survey_delete_invalid(self):
        """Test case for survey_delete

        deletes the survey with a given name
        'name' is not a valid survey name
        """
        
        query_string = [('name', 'COS 225 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='DELETE',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.cursor.execute("select * from survey_to_tag;")
        self.assertEqual(len(self.cursor.fetchall()), 8)
        self.cursor.execute("select * from response;")
        self.assertEqual(len(self.cursor.fetchall()), 1)
        self.cursor.execute("select * from survey_to_question;")
        self.assertEqual(len(self.cursor.fetchall()), 3)
        self.cursor.execute("select * from survey_to_participant;")
        self.assertEqual(len(self.cursor.fetchall()), 2)
        self.cursor.execute("select * from survey;")
        self.assertEqual(len(self.cursor.fetchall()), 1)
        self.cursor.execute("select * from tag where type = 'name';")
        self.assertEqual(len(self.cursor.fetchall()), 1)

    def test_survey_get_valid(self):
        """Test case for survey_get

        retreives the survey with a given name
        'name' is a valid survey name
        """
        
        query_string = [('name', 'COS 140 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data),
            {
                "description": "Description",
                "email_confirm": "Email confirm text",
                "email_invite": "Survey URL: {SURVEYURL}<br/>Token: {TOKEN}",
                "email_register": "Email register text",
                "email_remind": "Email remind text",
                "endtext": "End text",
                "instructor": "Roy Turner",
                "name": "COS 140 001",
                "participants": [
                    {
                        "address": "jovon.craig@maine.edu",
                        "name": "Example Person"
                    },
                    {
                        "address": "teachingevaluationstest@gmail.com",
                        "name": "Example2 Person"
                    }
                ],
                "questions": [
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": 1,
                        "text": "Question?",
                        "type": "5"
                    },
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": 1,
                        "text": "Question 2?",
                        "type": "5"
                    },
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": 0,
                        "text": "Question 3?",
                        "type": "Y"
                    }
                ],
                "url": "example.com",
                "welcometext": "Welcome text"
            }
        )
    
    def test_survey_get_invalid(self):
        """Test case for survey_get

        retreives the survey with a given name
        'name' is not a valid survey name
        """
        
        query_string = [('name', 'COS 225 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), {})

    def test_survey_put_update(self):
        """Test case for survey_put

        updates the info of a survey with a given name
        survey with 'name' is updated with new information
        """
        
        query = {}
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='PUT',
            data=json.dumps(query),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
    
    def test_survey_put_create(self):
        """Test case for survey_put

        updates the info of a survey with a given name
        survey is created because 'name' does not exist
        """
        
        query = {}
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='PUT',
            data=json.dumps(query),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_surveys_get(self):
        """Test case for surveys_get

        retreives a list of the names of the user's surveys
        """
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 140 001'])

    def test_create_user_post(self):
        """Test case for create_user_post

        adds a user to the database
        """
        
        query = {}
        response = self.client.open(
            '/teameval/Eval/1.0.0/create_user',
            method='POST',
            data=json.dumps(query),
            content_type='application/json')
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

    def test_publish_get(self):
        """Test case for publish_get

        publishes the survey with a given name
        """
        
        query_string = [('name', 'name_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/publish',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_results_get(self):
        """Test case for results_get

        retreives a list of results, optionally for a given instructor
        """
        
        query_string = [('cat_type', 'instructor'), ('cat_name', 'example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
