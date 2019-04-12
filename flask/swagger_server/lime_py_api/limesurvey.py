#!/usr/bin/python
# -*- coding: utf-8 -*-

# NOTICE: This script has been changed from its original version to make
#         compatible with the evaluation system. Modifications were made
#         from February to March 2019.

from base64 import b64decode
import json
import sys
import requests
from time import sleep


class Api:
    # Initializes a LimeSurvey session with log-in credentials
    def __init__(self, url, user, key):
        self.url = url
        self._user = user
        self._password = key

        data = """{   "id": 1,
                    "method": "get_session_key",
                    "params": { "username": "%s",
                                "password": "%s" } } """ % (user, key)
        self.session_key = self._getJSON(data)['result']

    # Standard post request
    def _getJSON(self, data):
        headers = {'content-type': 'application/json',
                   'connection': 'Keep-Alive'}
        try:
            req = requests.post(self.url, data=data, headers=headers)
            return(req.json())
        except:
            e = sys.exc_info()[0]
            print ("<p>Error: %s</p>" % e)

    # Deletes a survey given an ID
    def delete_survey(self, sid):
        data = """{ "id": 1,
                    "method": "delete_survey",
                    "params": { "sSessionKey": "%s",
                                "iSurveyID": %s } }""" % (self.session_key,
                                                          sid)
        return self._getJSON(data)['result']

    # Sets a survey's property
    def set_survey_property(self, sid, prop, value):
        data = """{ "id": 1,
                    "method": "set_survey_properties",
                    "params": { "sSessionKey": "%s",
                                "iSurveyID": %s,
                                "aSurveySettings": { "%s": %s }
            } }""" % (self.session_key, sid, prop, value)
        return self._getJSON(data)['result']

    # Gets a survey's properties given an ID
    def get_survey_properties(self, sid, settings=None):

        if settings is None:
            settings = """ [
            "sid","savetimings","allowprev","tokenanswerspersistence",
            "showgroupinfo","showwelcome","owner_id","template","printanswers",
            "assessments","shownoanswer","showprogress","admin","language",
            "ipaddr","usecaptcha","showqnumcode","allowjumps","active",
            "additional_languages","refurl","usetokens","bouncetime",
            "navigationdelay","expires","datestamp","datecreated",
            "bounce_email","bounceprocessing","nokeyboard","startdate",
            "usecookie","publicstatistics","attributedescriptions",
            "bounceaccounttype","alloweditaftercompletion","adminemail",
            "allowregister","publicgraphs","emailresponseto",
            "bounceaccounthost","googleanalyticsstyle","anonymized",
            "allowsave","listpublic","emailnotificationto","bounceaccountpass",
            "googleanalyticsapikey","faxto","autonumber_start","htmlemail",
            "tokenlength","bounceaccountencryption","format","autoredirect",
            "sendconfirmation","showxquestions","bounceaccountuser" ] """

        data = """{ "id": 1,
                    "method": "get_survey_properties",
                    "params": { "sSessionKey": "%s",
                                "iSurveyID": %s,
                                "aSurveySettings": %s
            } }""" % (self.session_key, sid, settings)
        return self._getJSON(data)['result']

    # Gets a survey's statistics and token info given an ID
    def get_summary(self, sid):
        data = """{ "id": 1,
                    "method": "get_summary",
                    "params": { "sSessionKey": "%s",
                                "iSurveyID": %s,
                                "sStatname": "all" } }""" % (self.session_key,
                                                             sid)
        return self._getJSON(data)['result']

    # Makes a survey available for participants given an ID
    def activate_survey(self, sid):
        data = """{ "id": 1,
                    "method": "activate_survey",
                    "params": { "sSessionKey": "%s",
                                "SurveyID": %s } }""" % (self.session_key, sid)
        return self._getJSON(data)['result']

    # Adds a survey given a file of its info
    def import_survey(self, idata, title, sid, type='lss'):
        data = """{ "id": 1,
                    "method": "import_survey",
                    "params": { "sSessionKey": "%s",
                                "sImportData": "%s",
                                "sImportDataType": "%s",
                                "sNewSurveyName": "%s",
                                "DestSurveyID": %d } }""" \
               % (self.session_key, idata, type, title, sid)
        return self._getJSON(data)['result']

    # Closes a previously opened session
    def release_session_key(self):
        data = """ { "method": "release_session_key",
                     "params": { "sSessionKey" : "%s"},
                     "id":1}' }""" % (self.session_key)
        return self._getJSON(data)['result']

    # Returns a JSON object of a survey's responses given an ID
    def export_responses(self, sid, status='all', heading='code',
                         response='short', fields=''):
        data = """ {    "id" : 1,
                        "method":"export_responses",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s,
                                    "sDocumentType": "json",
                                    "sLanguageCode": "en",
                                    "sCompletionStatus": "%s",
                                    "sHeadingType": "%s",
                                    "sResponseType": "%s",
                                    "aFields": "%s"
                        } } """ % (self.session_key, sid, status, heading,
                                   response, fields)
        print(data)
        out = b64decode(self._getJSON(data)['result']).decode('utf-8')
        return json.loads(out)

    # Returns a survey's responses given a participant's token
    def export_responses_by_token(self, sid, token):
        data = """ {    "id" : 1,
                        "method":"export_responses_by_token",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s,
                                    "sDocumentType": "json",
                                    "sToken":  "%s",
                                    "$sLanguageCode": "en",
                                    "sCompletationStatus": "all",
                                    "sHeadingType": "code",
                                    "sResponseType": "short"
                        } } """ % (self.session_key, sid, token)
        return self._getJSON(data)['result']

    # Add a response to a survey given a survey ID
    def _add_response(self, sid, rdata):
        data = """ {          "id": 1,
                              "method":"add_response",
                              "params": { "sSessionKey": "%s",
                                          "iSurveyID": %s,
                                          "aResponseData": %s }
                    } """ % (self.session_key, sid, rdata)
        return self._getJSON(data)['result']

    # Helper function for _list_groups
    def _list_groups(self, sid):
        data = """ {          "method":"list_groups",
                              "params": { "sSessionKey": "%s",
                                          "iSurveyID": %s },
                            "id": 1 } """ % (self.session_key, sid)
        return self._getJSON(data)['result']

    # Returns the info of a survey's groups given an ID
    def list_groups(self, sid):
        json_list_groups = self._list_groups(sid)

        groups = []
        for g in json_list_groups:
            group = g['id']['gid'], g['group_name']
            groups.append(group)

        return groups

    # Helper function for _list_questions
    def _list_questions(self, sid, gid='null'):
        data = """ {          "method":"list_questions",
                              "params": { "sSessionKey": "%s",
                                          "iSurveyID": %s,
                                          "iGroupID": %s },
                            "id": 1 } """ % (self.session_key, sid, gid)
        return self._getJSON(data)['result']

    # Returns the info of a survey's questions given an ID
    def list_questions(self, sid, gid='null'):
        json_list_questions = self._list_questions(sid, gid)

        questions = []
        for q in json_list_questions:
            question = q['id']['qid'], q['question']
            questions.append(question)
        return questions

    # Returns the info of all of a user's surveys
    def list_surveys(self, sUser=''):
        data = """ { "id" : 1,
                     "method":"list_surveys",
                     "params": { "sSessionKey": "%s", "sUsername": "%s"} 
                     } """ % (self.session_key, sUser)
        return self._getJSON(data)['result']

    # Returns the participants of a survey given an ID
    def list_participants(self, sid, iStart=0, iLimit=1000000, bUnused='true',
                          aAttributes='true', aConditions='array()'):
        data = """ {    "id" : 1,
                        "method":"list_participants",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s,
                                    "iStart": %s,
                                    "iLimit": %s,
                                    "bUnused": "%s",
                                    "aAttributes": "%s",
                                    "aConditions": "%s"
                        } } """ % (self.session_key, sid, iStart, iLimit,
                                   bUnused, aAttributes, aConditions)
        return self._getJSON(data)['result']
    
    # Activates a survey's participants list given an ID
    def activate_tokens(self, sid):
        data = """ {    "id" : 1,
                        "method":"activate_tokens",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s
                        } } """ % (self.session_key, sid)
        return self._getJSON(data)['result']
    
    # Add a given list of participants to a survey
    def add_participants(self, sid, participants):
        data = """ {    "id" : 1,
                        "method":"add_participants",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s,
                                    "aParticipantData": %s
                        } } """ % (self.session_key, sid,
                                   json.dumps(participants))
        return self._getJSON(data)['result']
    
    # Sends invitation e-mails to the participants of a given survey
    def invite_participants(self, sid):
        data = """ {    "id" : 1,
                        "method":"invite_participants",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s
                        } } """ % (self.session_key, sid)
        return self._getJSON(data)['result']
    
    # Sends reminder e-mails to the participants of a given survey
    def remind_participants(self, sid):
        data = """ {    "id" : 1,
                        "method":"remind_participants",
                        "params": { "sSessionKey": "%s",
                                    "iSurveyID":  %s
                        } } """ % (self.session_key, sid)
        return self._getJSON(data)['result']
