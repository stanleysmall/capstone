# coding: utf-8

from __future__ import absolute_import

import sys
import mysql.connector
from flask import json
from six import BytesIO

from swagger_server.models.course import Course  # noqa: E501
from swagger_server.models.result import Result  # noqa: E501
from swagger_server.test import BaseTestCase
from swagger_server.lime_py_api.limesurvey import Api
from swagger_server.controllers.teachers_controller import session
from swagger_server.controllers.teachers_controller import timers
from swagger_server.controllers.teachers_controller import anonymize

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
        with open('swagger_server/test/delete_data.sql', 'r') as f:
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
                "email_confirm": "Dear {FIRSTNAME},<br /><br />this email is "
                    + "to confirm that you have completed the survey titled "
                    + "{SURVEYNAME} and your response has been saved. Thank "
                    + "you for participating.",
                "email_invite": "Dear {FIRSTNAME},<br/><br/>you have been "
                    + "invited to participate in a survey.<br/><br/>Click "
                    + "here to do the survey:<br/>{SURVEYURL}<br/><br/>Please "
                    + "enter the token {TOKEN} to access the survey.",
                "email_register": "Email register text",
                "email_remind": "Dear {FIRSTNAME},<br/><br/>we wish to remind "
                    + "you to participate in a survey.<br/><br/>Click "
                    + "here to do the survey:<br/>{SURVEYURL}<br/><br/>Please "
                    + "enter the token {TOKEN} to access the survey.",
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
                        "name": "Tom Guo"
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
        # Survey 3 must relate to the IDs for Jovon and Stan
        self.assertEqual(self.cursor.fetchall()[3:], [(3, 4), (3, 5)])
        self.cursor.execute("select * from question;")
        # The new question must be added
        self.assertEqual(self.cursor.fetchall()[4],
                         (5, 'Help text 2', True,
                          'Group 2', 'L', 'New question?'))
        self.cursor.execute("select * from survey_to_question;")
        # Survey 3 must relate to the ID of the new question
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

    def test_survey_put_create_2(self):
        """Another Test case for survey_put

        creates or updates the info of a survey with a given name
        survey with new 'name' and 'instructor' is added into the database
        """
        
        query = {
            "URL": "example2.com",
            "instructor": "Sudarshan Chawathe",
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
        # The new instructor ID must be 2 plus 1, referring to Chaw,
        # instructor ID = 3, survey ID = 3
        self.assertEqual(self.cursor.fetchall()[2], (3, 'example2.com', 3))
        self.cursor.execute("select * from participant;")
        # No new participants must be added
        self.assertEqual(self.cursor.fetchall()[2:],
                         [(3, 'Tom Guo', 'tg@gmail.com'),
                          (4, 'Jovon Craig', 'jc@gmail.com')])
        self.cursor.execute("select * from survey_to_participant;")
        # Survey 3 must relate to the IDs for Jovon and Tom
        self.assertEqual(self.cursor.fetchall()[3:], [(3, 3), (3, 4)])
        self.cursor.execute("select * from question;")
        # The new question must be added
        self.assertEqual(self.cursor.fetchall()[4],
                         (5, 'Help text 2', True,
                          'Group 2', 'L', 'New question?'))
        self.cursor.execute("select * from survey_to_question;")
        # Survey 3 must relate to the ID of the new question
        self.assertEqual(self.cursor.fetchall()[5], (3, 5))
        self.cursor.execute("select type, value from tag;")
        # Only the new tags must be added
        self.assertEqual(set(self.cursor.fetchall()[14:]),
                         {('name', 'COS 226 001'), ('email_register',
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
    
    def test_surveys_get_notag_valid(self):
        """Test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is 'Roy Turner', no tag entered
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 140 001'])
     
    def test_surveys_get_notag_valid_2(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is 'Torsten Hahmann', no tag entered
        """
        
        session['email'] = 'torsten.hahmann@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 250 001'])
    
    def test_surveys_get_tag_valid(self):
        """Test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is 'Roy Turner', 'email_register' tag entered
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = [('tag_type', 'email_register'),
                        ('tag_value', 'Email register text')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), ['COS 140 001'])
    
    def test_surveys_get_notag_invalid(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is not in the database
        """
        
        session['email'] = 'carol.roberts@maine.edu'
        
        query_string = []
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), [])
    
    def test_surveys_get_tag_invalid(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        session user is in the database, but not the tag value
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = [('tag_type', 'email_register'),
                        ('tag_value', 'Invalid text')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), [])
    
    def test_surveys_get_tag_invalid_2(self):
        """Another test case for surveys_get

        retreives a list of the names of the user's surveys
        tag value is in the database, but not for the session user
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = [('tag_type', 'email_register'),
                        ('tag_value', 'Er text')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/surveys',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), [])
        
    def test_tag_values_get_valid(self):
        """Test case for tag_values_get

        retreives a list of values for a given tag type of the user's surveys
        session user is 'Roy Turner', tag type is valid for user
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = [('tag_type', 'email_register')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/tag_values',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        # The response must have only the tag value for Roy Turner's surveys
        self.assertEqual(json.loads(response.data), ['Email register text'])
    
    def test_tag_values_get_valid_2(self):
        """Another test case for tag_values_get

        retreives a list of values for a given tag type of the user's surveys
        session user is 'Torsten Hahmann', tag type is valid for user
        """
        
        session['email'] = 'torsten.hahmann@maine.edu'
        
        query_string = [('tag_type', 'email_register')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/tag_values',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        # The response must have only the tag value for Roy Turner's surveys
        self.assertEqual(json.loads(response.data), ['Er text'])
    
    def test_tag_values_get_invalid(self):
        """Another test case for tag_values_get

        retreives a list of values for a given tag type of the user's surveys
        tag type is not in the database
        """
        
        session['email'] = 'roy.turner@maine.edu'
        
        query_string = [('tag_type', 'newtag')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/tag_values',
            method='GET',
            query_string=query_string)
        
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        self.assertEqual(json.loads(response.data), [])
    
    def test_tag_values_get_invalid_2(self):
        """Another test case for tag_values_get

        retreives a list of values for a given tag type of the user's surveys
        tag type is in the database, but not for the user
        """
        
        session['email'] = 'carol.roberts@maine.edu'
        
        query_string = [('tag_type', 'newtag')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/tag_values',
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
        
        anonymize = True        # Make survey responses anonymous
        
        query_string = [('name', 'COS 140 001')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/publish',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        # Check if survey is published
        self.assertEqual(self.lime.list_surveys()[1], {'sid': '1',
            'surveyls_title': 'COS 140 001', 'startdate': None,
            'expires': None, 'active': 'Y'})
        
        # Check if survey participants exist
        participants = self.lime.list_participants(1)
        self.assertEqual(participants[0]['participant_info'],
            {'firstname': 'Example', 'lastname': 'Person',
             'email': 'jovon.craig@maine.edu'})
        self.assertEqual(participants[1]['participant_info'],
            {'firstname': 'Example2', 'lastname': 'Person',
             'email': 'teachingevaluationstest@gmail.com'})
        
        questions = self.lime._list_questions(1)
        
        # Remove question fields that are unnecessary to test
        removedKeys = ('id', 'qid', 'parent_qid', 'preg', 'other',
                       'question_order', 'scale_id', 'same_default',
                       'relevance', 'modulename', 'gid')
        for question in questions:
            for key in removedKeys:
                question.pop(key)
        
        # Check if survey question info is correct
        self.assertCountEqual(questions, [{'sid': '1', 'type': '5', 'title': 'Q1',
            'question': 'Question?', 'help': '', 'mandatory': 'Y',
            'language': 'en'}, {'sid': '1', 'type': '5', 'title': 'Q2',
            'question': 'Question 2?', 'help': '', 'mandatory': 'Y',
            'language': 'en'}, {'sid': '1', 'type': 'Y', 'title': 'Q3',
            'question': 'Question 3?', 'help': '', 'mandatory': 'N',
            'language': 'en'}])
        
        # Remove mock survey from LimeSurvey
        self.lime.delete_survey(1)
        
        # Stop timers to prevent waiting for their completion
        for timer in timers:
            timer.cancel()
    
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
        
        anonymize = False       # Do not make survey responses anonymous
        
        # Add a survey by Roy Turner to LimeSurvey
        response = self.client.open('/teameval/Eval/1.0.0/publish',
            method='GET', query_string=[('name', 'COS 140 001')])
        
        codes = []              # Represent questions in the survey
        # Sort questions by their ID
        questions = sorted(self.lime._list_questions(1),
                           key = lambda q: q['qid'])
        # Retrieve group and question IDs to make question codes
        for question in questions:
            codes.append('1X{}X{}'.format(question['gid'], question['qid']))

        # Add some mock survey responses to the survey
        self.lime._add_response(1, json.dumps({
            codes[0]: 4, codes[1]: 1, codes[2]: 'Y'}))
        self.lime._add_response(1, json.dumps({
            codes[0]: 5, codes[1]: 1, codes[2]: 'N'}))
        self.lime._add_response(1, json.dumps({
            codes[0]: 2, codes[1]: 2, codes[2]: 'N'}))
        self.lime._add_response(1, json.dumps({
            codes[0]: 5, codes[1]: 3, codes[2]: 'Y'}))
        
        # Get results for Roy Turner's surveys
        query_string = [('cat_type', 'instructor'), ('cat_name', 'Roy Turner')]
        response = self.client.open(
            '/teameval/Eval/1.0.0/results',
            method='GET', query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))
        
        # Assert that return value matches expected statistics
        self.assertEqual(json.loads(response.data),
            {'Question 2?': {'COS 140 001':
                {'mean': 1.75, 'median': 1.5, 'n': 4, 'std_dev': 0.96}},
             'Question?': {'COS 140 001':
                {'mean': 4, 'median': 4.5, 'n': 4, 'std_dev': 1.41}}})
        
        # Remove mock survey from LimeSurvey
        self.lime.delete_survey(1)
        
        # Stop timers to prevent waiting for their completion
        for timer in timers:
            timer.cancel()
    
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
