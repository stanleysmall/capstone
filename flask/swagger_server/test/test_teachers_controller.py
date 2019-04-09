# coding: utf-8

from __future__ import absolute_import

import mysql.connector
from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server.test import BaseTestCase
from swagger_server.lime_py_api.limesurvey import Api

class TestTeachersController(BaseTestCase):
    """TeachersController integration test stubs"""
    
    # Print entire difference between expected and actual output
    maxDiff = None
    
    @classmethod
    def setUpClass(cls):
        # Log into LimeSurvey with the RemoteControl API
        cls.lime = Api('http://10.5.0.5/index.php/admin/remotecontrol',
                       'admin', 'password')
        
        # Connect to MySQL database
        cls.mydb = mysql.connector.connect(host='10.5.0.6',
                                           port=3306,
                                           database='mydb',
                                           user='root',
                                           password='root',
                                           buffered=True)
        cls.cursor = cls.mydb.cursor()
        
    def setUp(self):
        # Insert mock data before every test
        with open('swagger_server/test/insert_mock_data.sql', 'r') as f:
            for line in f.readlines():
                self.cursor.execute(line)
            self.mydb.commit()
    
    def tearDown(self):
        # Delete mock data after every test
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
        
        # HTML 200 is the success code
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        # There must not be any rows in the database referencing the survey
        self.cursor.execute("select * from survey_to_tag where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from response where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute(
            "select * from survey_to_question where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute(
            "select * from survey_to_participant where survey_ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute("select * from survey where ID = 1;")
        self.assertEqual(len(self.cursor.fetchall()), 0)
        self.cursor.execute(
            "select * from tag where type = 'name' && value = 'COS 140 001';")
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
        
        # There must be the same number of rows in the tables as before
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.cursor.execute("select * from survey_to_tag;")
        self.assertEqual(len(self.cursor.fetchall()), 16)
        self.cursor.execute("select * from response;")
        self.assertEqual(len(self.cursor.fetchall()), 1)
        self.cursor.execute("select * from survey_to_question;")
        self.assertEqual(len(self.cursor.fetchall()), 5)
        self.cursor.execute("select * from survey_to_participant;")
        self.assertEqual(len(self.cursor.fetchall()), 3)
        self.cursor.execute("select * from survey;")
        self.assertEqual(len(self.cursor.fetchall()), 2)
        self.cursor.execute("select * from tag where type = 'name';")
        self.assertEqual(len(self.cursor.fetchall()), 2)

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
                        "mandatory": True,
                        "text": "Question?",
                        "type": "5"
                    },
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": True,
                        "text": "Question 2?",
                        "type": "5"
                    },
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": False,
                        "text": "Question 3?",
                        "type": "Y"
                    }
                ],
                "url": "example.com",
                "welcometext": "Welcome text"
            }
        )
                    
    def test_survey_get_valid_2(self):
        """ Another test case for survey_get

        retreives the survey with a given name
        'name' is a valid survey name
        """
        
        query_string = [('name', 'COS 250 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='GET',
            query_string=query_string)
        self.assert200(response,'Response body is : '
                       + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data),
            {
                "description": "De",
                "email_confirm": "Ec text",
                "email_invite": "Ei text",
                "email_register": "Er text",
                "email_remind": "Eremind text",
                "endtext": "End text",
                "instructor": "Torsten Hahmann",
                "name": "COS 250 001",
                "participants": [
                    {
                        "address": "tg@gmail.com",
                        "name": "tom guo"
                    }
                ],
                "questions": [
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": True,
                        "text": "Question?",
                        "type": "5"
                    },
                    {
                        "group": "The Instructor",
                        "helpText": "Help text",
                        "mandatory": False,
                        "text": "Question 2?",
                        "type": "L"
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

        creates or updates the info of a survey with a given name
        survey with 'name' is updated with new information
        """
        
        query = {
            "URL": "example2.com",
            "instructor": "Torsten Hahmann",
            "participants":[{"name": "Jovon Craig", "address": "jc@gmail.com"},
                            {"name": "Stan Small", "address": "ss@gmail.com"}],
            "questions": [{"ID": 5,
                           "helpText": "Help text 2",
                           "mandatory": True,
                           "group": "Group 2",
                           "type": "L",
                           "text": "New question?"}],
            "name": "COS 140 001",
            "description": "Description",
            "welcometext": "wt",
            "endtext": "et",
            "email_invite": "invite",
            "email_remind": "remind",
            "email_register": "register",
            "email_confirm": "confirm",
            "newtag": "field",
            "newtag2": "field2"
        }
        
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='PUT',
            data=json.dumps(query),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        self.cursor.execute("select * from survey;")
        # The instructor ID must be 2, referring to Torsten
        self.assertEqual(self.cursor.fetchall()[0], (1, 'example2.com', 2))
        self.cursor.execute("select * from participant;")
        # The participants Jovon Craig and Stanley Small must be added
        self.assertEqual(self.cursor.fetchall()[3:],
                         [(4, 'Jovon Craig', 'jc@gmail.com'),
                          (5, 'Stan Small', 'ss@gmail.com')])
        self.cursor.execute("select * from survey_to_participant;")
        # Survey 1 must relate to only the IDs for Jovon and Stan
        self.assertEqual(self.cursor.fetchall()[1:], [(1, 4), (1, 5)])
        self.cursor.execute("select * from question;")
        # The new question must be added
        self.assertEqual(self.cursor.fetchall()[4],
                         (5, 'Help text 2', True,
                          'Group 2', 'L', 'New question?'))
        self.cursor.execute("select * from survey_to_question;")
        # Survey 1 must relate to only the ID of the new question
        self.assertEqual(self.cursor.fetchall()[2], (1, 5))
        self.cursor.execute("select type, value from tag;")
        # Only the new tags must be added
        self.assertEqual(set(self.cursor.fetchall()[14:]),
                         {('email_register', 'register'), ('email_invite',
                          'invite'), ('endtext', 'et'), ('newtag', 'field'),
                          ('email_confirm', 'confirm'), ('email_remind',
                          'remind'), ('welcometext', 'wt'), ('newtag2',
                          'field2')})
        self.cursor.execute("select tag_ID from survey_to_tag where " \
                            "survey_ID = 1;")
        # Survey 1 must relate to the IDs of the old name, old description,
        # and new tags
        self.assertEqual(self.cursor.fetchall(), [(1,), (2,), (15,), (16,),
                                                  (17,), (18,), (19,), (20,),
                                                  (21,), (22,)])
    
    def test_survey_put_create(self):
        """Test case for survey_put

        creates or updates the info of a survey with a given name
        survey with new 'name' and 'instructor' is added into the database
        """
        
        query = {
            "URL": "example2.com",
            "instructor": "Carol Roberts",
            "participants":[{"name": "Jovon Craig", "address": "jc@gmail.com"},
                            {"name": "Stan Small", "address": "ss@gmail.com"}],
            "questions": [{"ID": 5,
                           "helpText": "Help text 2",
                           "mandatory": True,
                           "group": "Group 2",
                           "type": "L",
                           "text": "New question?"}],
            "name": "COS 250 002",
            "description": "Description",
            "welcometext": "wt",
            "endtext": "et",
            "email_invite": "invite",
            "email_remind": "remind",
            "email_register": "register",
            "email_confirm": "confirm",
            "newtag": "field",
            "newtag2": "field2"
        }
        
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='PUT',
            data=json.dumps(query),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        self.cursor.execute("select * from survey;")
        # The new instructor ID must be 2 plus 1, referring to Carol
        self.assertEqual(self.cursor.fetchall()[2], (3, 'example2.com', 3))
        self.cursor.execute("select * from participant;")
        # The participants Jovon Craig and Stanley Small must be added
        self.assertEqual(self.cursor.fetchall()[3:],
                         [(4, 'Jovon Craig', 'jc@gmail.com'),
                          (5, 'Stan Small', 'ss@gmail.com')])
        self.cursor.execute("select * from survey_to_participant;")
        # Survey 1 must relate to the IDs for Jovon and Stan
        self.assertEqual(self.cursor.fetchall()[3:], [(3, 4), (3, 5)])
        self.cursor.execute("select * from question;")
        # The new question must be added
        self.assertEqual(self.cursor.fetchall()[4],
                         (5, 'Help text 2', True,
                          'Group 2', 'L', 'New question?'))
        self.cursor.execute("select * from survey_to_question;")
        # Survey 1 must relate to the ID of the new question
        self.assertEqual(self.cursor.fetchall()[5], (3, 5))
        self.cursor.execute("select type, value from tag;")
        # Only the new tags must be added
        self.assertEqual(set(self.cursor.fetchall()[14:]),
                         {('name', 'COS 250 002'), ('email_register',
                          'register'), ('email_invite', 'invite'), ('endtext',
                          'et'), ('newtag', 'field'), ('email_confirm',
                          'confirm'), ('email_remind', 'remind'),
                          ('welcometext', 'wt'), ('newtag2', 'field2')})
        self.cursor.execute("select tag_ID from survey_to_tag where " \
                            "survey_ID = 3;")
        # Survey 3 must relate to the IDs of the old description, new name,
        # and new tags
        self.assertEqual(self.cursor.fetchall(), [(2,), (15,), (16,), (17,),
                                                  (18,), (19,), (20,), (21,),
                                                  (22,), (23,)])

     def test_survey_put_create2(self):
        """Another Test case for survey_put

        creates or updates the info of a survey with a given name
        survey with new 'name' and 'instructor' is added into the database
        """
        
        query = {
            "URL": "example2.com",
            "instructor": "Sudarshan S.Chawathe",
            "participants":[{"name": "Jovon Craig", "address": "jc@gmail.com"},
                            {"name": "Tom Guo", "address": "tg@gmail.com"}],
            "questions": [{"ID": 5,
                           "helpText": "Help text 2",
                           "mandatory": True,
                           "group": "Group 2",
                           "type": "L",
                           "text": "New question?"}],
            "name": "COS 226 001",
            "description": "Description",
            "welcometext": "wt",
            "endtext": "et",
            "email_invite": "invite",
            "email_remind": "remind",
            "email_register": "register",
            "email_confirm": "confirm",
            "newtag": "field",
            "newtag2": "field2"
        }
        
        response = self.client.open(
            '/teameval/Eval/1.0.0/survey',
            method='PUT',
            data=json.dumps(query),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        self.cursor.execute("select * from survey;")
        # The new instructor ID must be 3 plus 1, referring to Chaw, instructor ID=4, survey ID=5
        self.assertEqual(self.cursor.fetchall()[2], (5, 'example2.com', 4))
        self.cursor.execute("select * from participant;")
        # The participants Jovon Craig and Tom Guo must be added
        self.assertEqual(self.cursor.fetchall()[5:],
                         [(6, 'Jovon Craig', 'jc@gmail.com'),
                          (7, 'Tom Guo', 'tg@gmail.com')])
        self.cursor.execute("select * from survey_to_participant;")
        # Survey 5 must relate to the IDs for Jovon and Tom
        self.assertEqual(self.cursor.fetchall()[5:], [(5, 6), (5, 7)])
        self.cursor.execute("select * from question;")
        # The new question must be added
        self.assertEqual(self.cursor.fetchall()[4],
                         (5, 'Help text 2', True,
                          'Group 2', 'L', 'New question?'))
        self.cursor.execute("select * from survey_to_question;")
        # Survey 1 must relate to the ID of the new question
        self.assertEqual(self.cursor.fetchall()[5], (5, 5))
        self.cursor.execute("select type, value from tag;")
        # Only the new tags must be added
        self.assertEqual(set(self.cursor.fetchall()[14:]),
                         {('name', 'COS 226 001'), ('email_register',
                          'register'), ('email_invite', 'invite'), ('endtext',
                          'et'), ('newtag', 'field'), ('email_confirm',
                          'confirm'), ('email_remind', 'remind'),
                          ('welcometext', 'wt'), ('newtag2', 'field2')})
        self.cursor.execute("select tag_ID from survey_to_tag where " \
                            "survey_ID = 5;")
        # Survey 5 must relate to the IDs of the old description, new name,
        # and new tags
        self.assertEqual(self.cursor.fetchall(), [(15,), (16,), (17,),
                                                  (18,), (19,), (20,), (21,),
                                                  (22,), (23,),(24,)])
    
    def test_surveys_get_valid(self):
        """Test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is 'Roy Turner'
        """
        
        with self.client.session_transaction() as sess:
            sess['name'] = 'Roy Turner'
            sess['email'] = 'roy.turner@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 140 001'])
     
    def test_surveys_get_valid_2(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is 'Torsten Hahmann'
        """
        
        with self.client.session_transaction() as sess:
            sess['name'] = 'Torsten Hahmann'
            sess['email'] = 'torsten.hahmann@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 250 001'])
    
    def test_surveys_get_invalid(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        seesion user is not in the database
        """
        
        with self.client.session_transaction() as sess:
            sess['name'] = 'Carol Roberts'
            sess['email'] = 'carol.roberts@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), [])

    def test_login_get_invalid(self):
        """Test case for login_get

        logs in a user with a certain authentication key
        'key' is invalid
        """
        
        query_string = [('key', 'key_example')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/login',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), 'INVALID LOGIN')

    def test_publish_get_valid(self):
        """Test case for publish_get

        publishes the survey with a given name
        survey name is 'COS 140 001'
        """
        
        query_string = [('name', 'example')]
        # query_string = [('name', 'COS 140 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/publish',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        # Call lime.list_surveys() to check if survey is published
        
        # Call lime.list_participants() to check if participants exist
        
        # Call lime.list_questions() to check survey question info
    
    def test_publish_get_invalid(self):
        """Test case for publish_get

        publishes the survey with a given name
        survey name does not exist in the database
        """
        
        query_string = [('name', 'COS 225 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/publish',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), 'invalid survey name')

    def test_results_get_valid(self):
        """Test case for results_get

        retreives a list of results for a given category of surveys
        category is instructor Roy Turner
        """
        
        # Add a survey by Roy Turner to LimeSurvey
        # response = self.client.open('/teameval/Eval/1.0.0/publish',
        #     method='GET', query_string=[('name', 'COS 140 001')])
        
        # Call lime.add_response() with a few mock survey responses
        
        query_string = [('cat_type', 'example'), ('cat_name', 'example')]
        # query_string = [('cat_type', 'instructor'),
        #                 ('cat_name', 'Roy Turner')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        # Assert that return value matches expected statistics
    
    def test_results_get_invalid(self):
        """Test case for results_get

        retreives a list of results for a given category of surveys
        category name does not exist in the database
        """
        
        query_string = [('cat_type', 'instructor'),
                        ('cat_name', 'Carol Roberts')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data),
                         "no surveys found for category 'Carol Roberts'")


if __name__ == '__main__':
    import unittest
    unittest.main()
