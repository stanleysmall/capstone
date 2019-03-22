import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {Redirect} from "react-router";

import {survey} from "./vars";
import {openEndedQuestionList} from "./vars";
import {exampleOldEvaluation} from "./vars";

const APIAddress = "http://52.15.216.252:8080/teameval/Eval/1.0.0/";

class Home extends Component {

    state = {
        complete: false,
        useTemplate: false,
        loadableEvals : [{id:0, name:"Select an evaluation"},                  
                        ]

    };

    //JSON which defines the format of the survey that 
    //users fill out of create an evaluation.  Stores in questionTemplate.js
    surveyJSON = survey;

    //Stores correctly formatted data to be pushed to database
    evalTemplate = {
    }

    /*
        Sets the theme of the user input survey and generates a list of the names of the past surveys which can be used as templates
    */
    constructor(props){
        super(props);
        
        //Bind this in the onComplete function so we can access state and other functions through it
        this.onComplete = this.onComplete.bind(this);

        //Change theme to match Project Evals colors
        var defaultThemeColors = Survey
            .StylesManager
            .ThemeColors["default"];

        defaultThemeColors["$main-color"] = "#4CAF50";
        defaultThemeColors["$main-hover-color"] = "#45a049";
        Survey.StylesManager.applyTheme();

        //var oldEvalNames = this.getEvalNames(); <------------------------------for when api calls work, currently just use list of example eval names

        var oldEvalNames = ["test eval", "test eval 2"];

        for(var i = 0; i < oldEvalNames.length; i++)
        {
            this.state.loadableEvals.push({id: i+1, name: oldEvalNames[i]})
        }

        //console.log(this.getEval("COS 140 001"));
    }

    /*
        Arguments:
            name: name of the evaluation the user wants to use as a template.  null if the user wants to start fresh

        Either creates a blank user input survey or populates a survey with the past evaluation that matches the passed name
    */
    template(name)
    {
        //this.loadEvaluation(this.getEval(name)) <------------------------------for when api calls work, currently just load the one example old eval
        this.loadEvaluation(exampleOldEvaluation);
        this.setState({useTemplate: true});
    
    }

    /*
        Arguments:
            survey: completed SurveyJS object which was created using the surveyJSON
            options: ???

        Called upon completion of the survey, formats the users input to match the database endpoint
        specs, enters the evaluation into the database then redirects the user back to the home page
    */
    onComplete(survey, options)
    {
        //Log the results of the survey  DEBUGGING
        //console.log("Results: " + JSON.stringify(survey.data,null,2));

        //Format the results of the survey in a way that can be sent to the put enpoint
        this.formatSurvey(survey);

        //Put the formatted survey into the database
        this.putEval(this.evalTemplate)

        //Mark the evaluation creation completed 
        this.setState({complete: true});
    }

    /*
        Arguments:
            toStore: an evaluation object you want to store in the database in the form:

            {  "URL": str,
                "instructor": str,
                "participants": [{"name": str,
                                    "address": str}, ...],
                "questions": [{"ID": int,
                                "helpText": str,
                                "mandatory": bool,
                                "group": str,
                                "type": str,
                                "text": str}, ...],
                "name": str,
                tag name 2: str,
                tag name 3: str, ...} 

        Stores the passed evaluation in the database
    */
    putEval(toStore)
    {
        return fetch(APIAddress + "/survey", {
            method: 'PUT',
            body: JSON.stringify(toStore)
        });
    }

    /*
        Arguments:
            name: a string which represents the name of the evaluation you want to fetch from the database    
    
        Returns: The JSON object which represents the corresponding evaluation in the database
    */
    getEval(name)
    {
        return fetch(APIAddress +"survey?name=" + name)
    }

    /*
        Returns: A list of all the names of surveys the user has created in the past
    */
    getEvalNames()
    {
        return fetch(APIAddress +"surveys")
    }

    /*
        Arguments:
            evaluation: an evaluation object you wish to pre populate the fields with in the form:
        
        {  "URL": str,
           "instructor": str,
           "participants": [{"name": str,
                             "address": str}, ...],
           "questions": [{"ID": int,
                          "helpText": str,
                          "mandatory": bool,
                          "group": str,
                          "type": str,
                          "text": str}, ...],
           "name": str,
           tag name 2: str,
           tag name 3: str, ...}


        Loads all aspects of the passed eval into the new form
        except for the semester/year, begin/end date, and class roll
    */
    loadEvaluation(evaluation)
    {
        //store values to populate first page in an array
        var newValues = [
                        evaluation.courseDesignator,
                        evaluation.courseNumber,
                        evaluation.courseSection,
                        evaluation.courseTitle,
                        "",                             //Don't populate the semester/year
                        evaluation.facultyUnit,
                        evaluation.college,
                        evaluation.university,
                        evaluation.instructorFirst,
                        evaluation.instructorLast,
                        evaluation.instructorEmail,
                        evaluation.instructorPhone,
                        evaluation.adminName,
                        evaluation.adminEmail,
                        "",                             //Don't populate the being/end date
                        "",
                        evaluation.reminderTime      
        ]

        //Populate the surveyJSON with default values for the first page
        for(var i = 0; i < newValues.length; i++)
        {
            this.surveyJSON.pages[0].elements[i].defaultValue = newValues[i];
        }

        //Indices of question sets in the second page elements
        var questionSets = [0,1,2,4,6,8,9];

        //Set default values of all questions on page 2 to do not include
        for(i = 0; i < questionSets.length; i++)
        {
            //Store the currentDataSet, for readability
            var currentDataSet = this.surveyJSON.pages[1].elements[questionSets[i]].defaultValue;

            //For every property set it to not include
            for(var property in currentDataSet)
            {
                if(currentDataSet.hasOwnProperty(property))
                { 
                    currentDataSet[property].Inclusion = "Do not include";
                }
            }
        }

        //Used for indexing into the surveyJSON
        var questionSet = 0;
        var currentQuestion;

        //Populate the surveyJSON with default values for the second page
        for(i = 0; i < evaluation.questions.length; i++)
        {
            //store the text of the question
            var currentQuestion = evaluation.questions[i].text;

            //Get the set of questions that the current question we are looking at is from
            switch(evaluation.questions[i].group)
            {
                case "Instructor Questions": 
                    questionSet = 0;
                    break;
                case "Course Questions": 
                    questionSet = 1;
                    break;
                case "Assesment Questions": 
                    questionSet = 2;
                    break;
                case "Lab Questions": 
                    questionSet = 4;
                    //If a lab question exists than set the value of was there a lab component to true
                    this.surveyJSON.pages[1].elements[3].defaultValue = "true";
                    break;
                case "Teaching Assistant Questions":
                    questionSet = 6;
                    //If a teaching assistant question exists than set the value of was there a teaching assistent to true
                    this.surveyJSON.pages[1].elements[5].defaultValue = "true";
                    break;
                case "Online Questions":
                    questionSet = 8;
                    //if an online question exists than set the value of was there an online component to true
                    this.surveyJSON.pages[1].elements[7].defaultValue = "true";
                    break;
                case "Open Ended Questions":
                    questionSet = 9;
                    break;
            }

            //If the question was mandatory set its corresponding default value to manditory
            if(evaluation.questions[i].mandatory)
            {
                this.surveyJSON.pages[1].elements[questionSet].defaultValue[currentQuestion].Inclusion = "Mandatory"
            }
            //Else set default value to Include
            else
            {
                this.surveyJSON.pages[1].elements[questionSet].defaultValue[currentQuestion].Inclusion = "Include"
            }
        }

        //Populate the surveyJSON with default values for the third page
        this.surveyJSON.pages[2].elements[1].defaultValue = evaluation.email_invite;
        this.surveyJSON.pages[2].elements[3].defaultValue = evaluation.email_reminder;

    }

    /*
        Arguments: 
            survey: a surveyJS object created using the surveyJSON var from vars.js which has been completed

        Populates the evaltemplate object with data in an API friendly format:
        
        {  "URL": str,
           "instructor": str,
           "participants": [{"name": str,
                             "address": str}, ...],
           "questions": [{"ID": int,
                          "helpText": str,
                          "mandatory": bool,
                          "group": str,
                          "type": str,
                          "text": str}, ...],
           "name": str,
           tag name 2: str,
           tag name 3: str, ...}

    */
    formatSurvey(survey)
    {
        //endpoint requires URL which is not used, just give a false one
        this.evalTemplate.URL = "blank.com"

        //Generate instructor full name
        this.evalTemplate.instructor = survey.data.instructorFirst + " " + survey.data.instructorLast

        //Parse participants CSV
        this.evalTemplate.participants = this.generateParticipants(survey.data.classRoll);

        //Parse Questions
        this.evalTemplate.questions = this.generateQuestions(survey.data);

        //Generate Evaluation Name
        this.evalTemplate.name = survey.data.courseDesignator + "" + survey.data.courseNumber +
        ":" + survey.data.courseSection + " " + survey.data.semesterYear;

        //Grab all the tags from the survey as they correspond 1 to 1 with the formatted eval template
        this.evalTemplate.courseDesignator = survey.data.courseDesignator;
        this.evalTemplate.courseNumber = survey.data.courseNumber;
        this.evalTemplate.courseSection = survey.data.courseSection;
        this.evalTemplate.courseTitle = survey.data.courseTitle;
        this.evalTemplate.semesterYear = survey.data.semesterYear;
        this.evalTemplate.facultyUnit = survey.data.facultyUnit;
        this.evalTemplate.college = survey.data.college;
        this.evalTemplate.university = survey.data.university;
        this.evalTemplate.instructorFirst = survey.data.instructorFirst;
        this.evalTemplate.instructorLast = survey.data.instructorLast;
        this.evalTemplate.instructorEmail = survey.data.instructorEmail;
        this.evalTemplate.instructorPhone = survey.data.instructorPhone;
        this.evalTemplate.adminName = survey.data.adminName;
        this.evalTemplate.adminEmail = survey.data.adminEmail;
        this.evalTemplate.beginDate = survey.data.beginDate;
        this.evalTemplate.closeDate = survey.data.closeDate;
        this.evalTemplate.reminderTime = survey.data.reminderTime;

        //email_invite          <------------------------------------------ breaks naming convention, required tag name by API
        this.evalTemplate.email_invite = survey.data.initialEmail;
        //email_reminder        <------------------------------------------ breaks naming convention, required tag name by API
        this.evalTemplate.email_reminder = survey.data.reminderEmail;

        //-------------------------------------------------TODO-------------------------------------------------------
        //description
        //welcometext
        //endtext
        //email_register
        //email_confirm


        console.log("formatted: " + JSON.stringify(this.evalTemplate,null,2));
    }

    /*
        Arguments:
            surveyData: a JSON object of the data generated by the survey which takes user input

        Returns:
            A list of questions from the users input in the form:
                [{"ID": int,
                    "helpText": str,
                    "mandatory": bool,
                    "group": str,
                    "type": str,
                    "text": str}, ...]
    */
    generateQuestions(surveyData)
    {
        //List of questions that will be returned after parsing data from the users input
        var questions = [];

        var questionID = 1;
        var currentGroup = "";
        var currentDataSet;

        //parse course questions
        currentGroup = "Course Questions"
        currentDataSet = surveyData.courseQuestions;
        questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID)

        //parse assesment questions
        currentGroup = "Assesment Questions"
        currentDataSet = surveyData.assesmentQuestions;
        questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID)

        //parse instructor questions
        currentGroup = "Instructor Questions"
        currentDataSet = surveyData.instructorQuestions;
        questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID)

        //parse lab questions
        if(surveyData.includeLabQuestions === "true")
        {
            currentGroup = "Lab Questions"
            currentDataSet = surveyData.labQuestions;
            questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID) 
        }

        //parse online questsions
        if(surveyData.includeOnlineQuestions === "true")
        {
            currentGroup = "Online Questions"
            currentDataSet = surveyData.onlineQuestions;
            questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID) 
        }
        
        //parse teaching assitant questions
        if(surveyData.includeTeachingAssistantQuestions === "true")
        {
            currentGroup = "Teaching Assistant Questions"
            currentDataSet = surveyData.teachingAssitantQuestions;
            questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID) 
        }

        //parse open ended questions
        currentGroup = "Open Ended Questions"
        currentDataSet = surveyData.openEndedQuestions;
        questionID = this.parseQuestionSet(currentGroup, currentDataSet, questions, questionID) 

        //parse additional questions
        //--------------------------------TODO-----------------------------
        
        return questions;
    }

    /*
        Arguments:
            currentGroup: Name of the current group of questions you are parsing
            currentDataSet: Data set of user input that is currently being procesed
            questions: List of questions to append new questions to
            questionID: Int representing the ID of the current question

        Parses the user input in currentDataSet and appends questions to the questions list
        in the form:

        [{"ID": int,
        "helpText": str,
        "mandatory": bool,
        "group": str,
        "type": str,
        "text": str}, ...]
    */
    parseQuestionSet(currentGroup, currentDataSet, questions, questionID)
    {
        var question = {
            "ID" : "",
            "helpText" : "",
            "mandatory" : "",
            "group" : "",
            "type" : "",
            "text" : ""
        }

        for(var property in currentDataSet)
        {
            if(currentDataSet.hasOwnProperty(property))
            {   
                //If the question is included
                if(currentDataSet[property].Inclusion !== "Do not include")
                {
                    //parse if the question is mandatory
                    if(currentDataSet[property].Inclusion === "Include")
                    {
                        question.mandatory = false;
                    }
                    else if (currentDataSet[property].Inclusion === "Mandatory")
                    {
                        question.mandatory = true;
                    }

                    question.ID = questionID;
                    question.group = currentGroup;
                    
                    //question type 5 = 5 point choice, T = text question
                    //check if it is on the list of open ended questions included in vars.js
                    if(openEndedQuestionList.indexOf(property) >= 0)
                    {
                        question.type = "T";
                    }
                    else
                    {
                        question.type = "5";
                    }

                    //Help text if it is a 5 poing question, no help text if it is open ended.
                    if(question.type === "5")
                    {
                        question.helpText = "1 is low, 5 is high";
                    }
                    else{
                        question.helpText = "";
                    }
                    
                    //The question text is the preoprty in the JSON we are itterating over
                    question.text = property;

                    //Deep copy the question
                    var temp = JSON.parse(JSON.stringify(question));

                    //Push the deep copy to the list of questions
                    questions.push(temp);

                    questionID++;
                }
            }
        }
        return questionID;
    }

    /*
        Arguments: 
            classRoll: String of participants in the form of first,last,email seperated by new lines or commas

        Returns:
            List of participants in the form:
            [{
            "name" : "",
            "address" : ""
            }, ...]
    */
    generateParticipants(classRoll)
    {
        //Replace new line characters with commas
        classRoll = classRoll.replace(/\n/g,",");
        
        //split the classroll into an array in order of first,last,email
        var split = classRoll.split(",");
        
        //Variables used to construct particpants
        var count = 0;
        var fullname = "";

        //template for how participants need to be formatted
        //used when building participants to appent to the participants list
        var participant = {
            "name" : "",
            "address" : ""
        }
        //list of participants to be returned
        var participants = [];

        //Loop though the array of first,last,email
        for(var i = 0; i <split.length; i++)
        {
            //If first index for current participant set fullname = firstname
            if(count === 0)
            {
                fullname = split[i];
                count ++;
            }
            //Else if second index for current participant append a space and last name to fullname
            else if(count === 1)
            {
                fullname += " ";
                fullname += split[i];
                count ++;
            }
            //Else if third index for current participant populate participant with fullname and address
            else if(count === 2)
            {
                participant.name = fullname;
                participant.address = split[i];
                
                //Deep copy the participant
                var temp = JSON.parse(JSON.stringify(participant));

                //Push the deep copy to the list of participants
                participants.push(temp);

                //start over on the next participant
                count = 0;
            }

        }
        return participants;
    }

    render() {
        //If the user has completed the evaluation creation redirect to home
        if(this.state.complete)
        {
            return(<Redirect to ="/home/"/>)
        }

        //Load a new survey with the template
        if(this.state.useTemplate)
        {
            var model = new Survey.Model(this.surveyJSON);

            return(    
                <div>
                    <div>
                        <h3>Wicked Easy Teaching Evaluations &emsp;
                        <a href="/">Landing</a> &emsp;
                        <a href = "/home/">Home</a>
                        <hr/>
                        </h3>
                    </div>        
    
                    <div id="survey">
                        <Survey.Survey model={model} onComplete={this.onComplete}/>
                    </div>
                </div>
                )
        }

        //default to new survey
        else{

            var blankModel = new Survey.Model(this.surveyJSON);

            return(
                <div>
                    <div>
                        <h3>Wicked Easy Teaching Evaluations &emsp;
                        <a href="/">Landing</a> &emsp;
                        <a href = "/home/">Home</a>
                        <hr/>
                        </h3>
                    </div>  

                    <select id="evaluationSelector">
                        {this.state.loadableEvals.map(template => {
                            return (
                                <option key = {template.id} value={template.name}>
                                    {template.name}
                                </option>
                            );
                        })}  
                    </select>
                    <button onClick = {() => this.template(document.getElementById("evaluationSelector").value)} > Use template</button>

                    <br/>
                    <br/>

                    <div id="survey">
                        <Survey.Survey model={blankModel} onComplete={this.onComplete}/>
                    </div>
                </div>
            )
        }
    }
}
export default Home;