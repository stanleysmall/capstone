import {defaultQuestions} from "../vars";

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
export const formatSurvey = (survey) =>
{


    
 
    //Stores correctly formatted data to be pushed to database
    var evalTemplate = {
    }

    //endpoint requires URL which is not used, just give a false one
    evalTemplate.URL = "blank.com"

    //Generate instructor full name
    evalTemplate.instructor = survey.data.CourseInformation.instructorFirst + " " + survey.data.CourseInformation.instructorLast

    //Parse participants CSV
    evalTemplate.participants = generateParticipants(survey.data.classRoll);

    if(survey.data.csv !== undefined){

        //remove data type header from csv data string
        var s = atob(survey.data.csv[0].content.substring(37));

        //remove this thing that sometimes shows up
        if(s.substring(0,3) === "ï»¿")
        {
            s = s.substring(3);
        }
        //remove newline characters and qutation marks
        s = s.replace(/(\r\n|\n|\r)/gm,"")
        s = s.replace("\"", "");
        s = s.replace("\"", "");

        //split on commas
        s = s.split(",")

        var participant = {
            "name" : "",
            "address" : ""
        }
    
        var count = 0;
        var fullname = "";

        //Loop though the array of first,last,email
        for(var i = 0; i <s.length; i++)
        {
            //If first index for current participant set fullname = firstname
            if(count === 0)
            {
                fullname = s[i];
                count ++;
            }
            //Else if second index for current participant append a space and last name to fullname
            else if(count === 1)
            {
                fullname += " ";
                fullname += s[i];
                count ++;
            }
            //Else if third index for current participant populate participant with fullname and address
            else if(count === 2)
            {
                participant.name = fullname;
                participant.address = s[i];
                
                //Deep copy the participant
                var temp = JSON.parse(JSON.stringify(participant));
    
                //Push the deep copy to the list of participants
                evalTemplate.participants.push(temp);
    
                //start over on the next participant
                count = 0;
            }
        }

    }

    //Parse Questions
    evalTemplate.questions = generateQuestions(survey.data);

    //Generate Evaluation Name
    evalTemplate.name = survey.data.CourseInformation.courseDesignator + "" + survey.data.CourseInformation.courseNumber +
    ":" + survey.data.CourseInformation.courseSection + " " + survey.data.CourseInformation.semesterYear;

    //Grab all the tags from the survey as they correspond 1 to 1 with the formatted eval template
    evalTemplate.courseDesignator = survey.data.CourseInformation.courseDesignator;
    evalTemplate.courseNumber = survey.data.CourseInformation.courseNumber;
    evalTemplate.courseSection = survey.data.CourseInformation.courseSection;
    evalTemplate.courseTitle = survey.data.CourseInformation.courseTitle;
    evalTemplate.semesterYear = survey.data.CourseInformation.semesterYear;
    evalTemplate.facultyUnit = survey.data.CourseInformation.facultyUnit;
    evalTemplate.college = survey.data.CourseInformation.college;
    evalTemplate.university = survey.data.CourseInformation.university;
    evalTemplate.instructorFirst = survey.data.CourseInformation.instructorFirst;
    evalTemplate.instructorLast = survey.data.CourseInformation.instructorLast;
    evalTemplate.instructorEmail = survey.data.CourseInformation.instructorEmail;
    evalTemplate.instructorPhone = survey.data.CourseInformation.instructorPhone;
    evalTemplate.adminName = survey.data.CourseInformation.adminName;
    evalTemplate.adminEmail = survey.data.CourseInformation.adminEmail;

    evalTemplate.beginDate = survey.data.CourseInformation.beginDate;
    evalTemplate.closeDate = survey.data.CourseInformation.closeDate;


    evalTemplate.reminderTime = survey.data.CourseInformation.reminderTime;

    if(survey.data.CourseInformation.graduateCourse === 'Y' || survey.data.CourseInformation.graduateCourse === 'Yes' || survey.data.CourseInformation.graduateCourse === 'yes')
    {
        evalTemplate.graduateCourse = "Y";
    }
    else
    {
        evalTemplate.graduateCourse = "N";
    }


    //email_invite          <------------------------------------------ breaks naming convention, required tag name by API
    evalTemplate.email_invite = survey.data.initialEmail;
    //email_reminder        <------------------------------------------ breaks naming convention, required tag name by API
    evalTemplate.email_remind = "";
    if(survey.data.reminderEmail)
        evalTemplate.email_remind = survey.data.reminderEmail;

    evalTemplate.published = "F";
    evalTemplate.description = "This is a teaching evaluation for " + evalTemplate.name;
    evalTemplate.welcometext = "Please complete the following evaluation for the class " + evalTemplate.name +". All responses to this evaluation are anonymous unless otherwise stated.";
    evalTemplate.endtext = "Thank you for evaluating the course \"" + evalTemplate.name + "\". Your feedback has been recorded and will be used to improve the quality of the course in the future.";
    evalTemplate.email_register = ""
    evalTemplate.email_confirm = "";

    
    console.log("formatted: " + JSON.stringify(evalTemplate,null,2));

    return evalTemplate;

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
const generateQuestions = (surveyData) =>
{
    //List of questions that will be returned after parsing data from the users input
    var questions = [];
    var questionID = 1;

    //template for question object
    var question = {
        "ID" : "",
        "helpText" : "",
        "mandatory" : "",
        "group" : "",
        "type" : "",
        "text" : ""
    }

    //Instructor Questions
    var currentGroup = "The Instructor";
    var currentData = surveyData["Instructor Default Questions"];
    questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

    //Custom instructor questions
    currentData = surveyData["Instructor Custom Questions"];
    questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);
    
    //Course Questions
    currentGroup = "The Course";
    currentData = surveyData["Course Default Questions"]
    questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

    //Custom Course questions
    currentData = surveyData["Course Custom Questions"];
    questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);

    //Assessment Questions
    currentGroup = "The Assesments";
    currentData = surveyData["Assessment Default Questions"]
    questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

    //Custom Assessment questions
    currentData = surveyData["Assessment Custom Questions"];
    questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);

    currentGroup = "Open Ended Questions"
    if(surveyData.hasOwnProperty("Open Ended Questions"))
    {
        currentData = surveyData["Open Ended Questions"];
        //Itterate through all the questions
        for (var key in currentData) {
            if (currentData.hasOwnProperty(key)) {
                var currentQuestion = currentData[key];
                
                if(currentQuestion.hasOwnProperty("include"))
                {
                    question.ID = questionID;
                    questionID++;
                    question.type = "T";
                    question.helpText = "";
                    question.group = currentGroup;
                    question.text = key;

                    if(currentQuestion.hasOwnProperty("mandatory"))
                    {
                        question.mandatory = true;
                    }
                    else{
                        question.mandatory = false;
                    }

                    //Deep copy
                    var temp = JSON.parse(JSON.stringify(question));
                    questions.push(temp);

                }
            }
        }
    }

    if(surveyData.hasOwnProperty("Open Ended Custom Questions"))
    {
        currentData = surveyData["Open Ended Custom Questions"];
        for(currentQuestion in currentData)
        {
            if(currentData[currentQuestion].hasOwnProperty("include"))
            {
                question.ID = questionID;
                questionID++;
                question.type = "T";
                question.helpText = "";
                question.group = currentGroup;
                question.text = currentData[currentQuestion].question;
                
                if(currentData[currentQuestion].hasOwnProperty("mandatory"))
                {
                    question.mandatory = true;
                }
                else
                {
                    question.mandatory = false;
                }

    
                //Deep copy
                temp = JSON.parse(JSON.stringify(question));
                questions.push(temp);
            }
        }
    }


    if(surveyData.hasOwnProperty("Include Lab"))
    {
        currentGroup = "The Lab";
        currentData = surveyData["Lab Default Questions"];
        questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

        currentData = surveyData["Lab Custom Questions"];
        questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);
    }
    if(surveyData.hasOwnProperty("Include TA"))
    {
        currentGroup = "The Teaching Assistant";
        currentData = surveyData["TA Default Questions"];
        questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

        currentData = surveyData["TA Custom Questions"];
        questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);
    }
    if(surveyData.hasOwnProperty("Include Online"))
    {
        currentGroup = "The Online Component";
        currentData = surveyData["Online Default Questions"];
        questionID = parsePresetQuestions(currentData, questionID, questions, currentGroup);

        currentData = surveyData["Online Custom Questions"];
        questionID = parseCustomQuestions(currentData, questionID, questions, currentGroup);
    }
    
    
    return questions;
}

const parseCustomQuestions = (currentData, questionID, questions, currentGroup) =>
{
    //template for question object
    var question = {
        "ID" : "",
        "helpText" : "",
        "mandatory" : "",
        "group" : "",
        "type" : "",
        "text" : ""
    }

    for(var currentQuestion in currentData)
    {
        if(currentData[currentQuestion].hasOwnProperty("include"))
        {
            question.ID = questionID;
            questionID++;

            if(currentData[currentQuestion].hasOwnProperty("mandatory"))
            {
                question.mandatory = true;
            }
            else
            {
                question.mandatory = false;
            }

            if(currentData[currentQuestion]["1"] === "--")
            {
                question.type = "T";
                question.helpText = "";
            }
            else
            {
                question.type = "5";
                question.helpText = "1 = " +  currentData[currentQuestion]["1"] + ", 5 = " + currentData[currentQuestion]["5"];
            }
            
            question.group = currentGroup;
            question.text = currentData[currentQuestion].question;

            //Deep copy
            var temp = JSON.parse(JSON.stringify(question));
            questions.push(temp);
        }
    }

    return questionID;
}

const parsePresetQuestions = (currentData, questionID, questions, currentGroup) =>
{
    //template for question object
    var question = {
        "ID" : "",
        "helpText" : "",
        "mandatory" : "",
        "group" : "",
        "type" : "",
        "text" : ""
    }

    //Itterate through all the questions
    for (var key in currentData) {
        if (currentData.hasOwnProperty(key)) {
            var currentQuestion = currentData[key];
            
            if(currentQuestion.hasOwnProperty("include"))
            {
                question.ID = questionID;
                questionID++;
                

                if(currentQuestion["1"] === "--")
                {
                    question.type = "T";
                    question.helpText = "";
                }
                else{
                    question.type = "5";
                    question.helpText = "1 = " +  currentQuestion["1"] + ", 5 = " + currentQuestion["5"];
                }


                if(currentQuestion.hasOwnProperty("mandatory"))
                {
                    question.mandatory = true;
                }
                else{
                    question.mandatory = false;
                }

                question.group = currentGroup;
                question.text = key;

                //Deep copy
                var temp = JSON.parse(JSON.stringify(question));
                questions.push(temp);

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
const generateParticipants = (classRoll) =>
{
    if(classRoll === undefined)
    {
        return [];
    }
    //Replace new line characters with commas
    classRoll = classRoll.replace(/\n/g,",");
    
    //split the classroll into an array in order of first,last,email
    var split = classRoll.split(",");
    
    //Variables used to construct particpants
    var count = 0;
    var fullname = "";

    //template for how participants need to be formatted
    //used when building participants to append to the participants list
    //Format that the API requires, should ideally keep first and last seperate
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



    /*
    Arguments:
        evaluation: an evaluation object you wish to pre populate the fields with in the form:
        surveyJSON: the surveyJS JSON you want to load the evaluation into

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

    returns: 
        A surveyJSON populated with all information from the passed evaluation


    Loads all aspects of the passed eval into the new form
    except for the semester/year, begin/end date, and class roll
*/
export const loadEvaluation = (evaluation, surveyJSON) =>
{
    var defaultValues = {};
    defaultValues.courseDesignator = evaluation.courseDesignator;
    defaultValues.courseNumber = evaluation.courseNumber;
    defaultValues.courseSection = evaluation.courseSection;
    defaultValues.courseTitle = evaluation.courseTitle;
    defaultValues.semesterYear = evaluation.semesterYear;
    defaultValues.facultyUnit = evaluation.facultyUnit;
    defaultValues.college = evaluation.college;
    defaultValues.university = evaluation.university;
    defaultValues.instructorFirst = evaluation.instructorFirst;
    defaultValues.instructorLast = evaluation.instructorLast;
    defaultValues.instructorEmail = evaluation.instructorEmail;
    defaultValues.instructorPhone = evaluation.instructorPhone;
    defaultValues.adminName = evaluation.adminName;
    defaultValues.adminEmail = evaluation.adminEmail;
    defaultValues.beginDate = evaluation.beginDate;
    defaultValues.closeDate = evaluation.closeDate;
    defaultValues.reminderTime = evaluation.reminderTime;
    defaultValues.graduateCourse = evaluation.graduateCourse;

    //Populate the surveyJSON with default values for the first page
    surveyJSON.pages[0].elements[1].defaultValue = defaultValues;

    //console.log(evaluation.questions);
    for (var question in evaluation.questions)
    {
        if(defaultQuestions.indexOf(evaluation.questions[question].text) > -1)
        {
            loadDefaultQuestion(evaluation.questions[question], surveyJSON);
        }
        else{loadCustomQuestion(evaluation.questions[question], surveyJSON);}
    }



    surveyJSON.pages[2].elements[0].elements[1].defaultValue = "";

    for (var student in evaluation.participants)
    {
        var names = evaluation.participants[student].name.split(/\s+/);
        surveyJSON.pages[2].elements[0].elements[1].defaultValue = surveyJSON.pages[2].elements[0].elements[1].defaultValue + names[0] + "," + names[1] + "," + evaluation.participants[student].address + "\n";
    }

    surveyJSON.pages[2].elements[1].elements[1].defaultValue = evaluation.email_invite;
    if(evaluation.email_reminder !== "")
        surveyJSON.pages[2].elements[1].elements[4].defaultValue = evaluation.email_reminder;

    return surveyJSON;
}

const loadCustomQuestion = (q, JSON) =>
{
    if(q.group === "The Instructor")
    {
        JSON.pages[1].elements[1].elements[1].rowCount = JSON.pages[1].elements[1].elements[1].rowCount + 1;

        if(JSON.pages[1].elements[1].elements[1].defaultValue === undefined)
        {
            JSON.pages[1].elements[1].elements[1].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[1].elements[1].defaultValue.push(tempQuestion);
    }

    if(q.group === "The Course")
    {
        JSON.pages[1].elements[2].elements[1].rowCount = JSON.pages[1].elements[2].elements[1].rowCount + 1;

        if(JSON.pages[1].elements[2].elements[1].defaultValue === undefined)
        {
            JSON.pages[1].elements[2].elements[1].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[2].elements[1].defaultValue.push(tempQuestion);
    }
    

    if(q.group === "The Assesments")
    {
        JSON.pages[1].elements[3].elements[1].rowCount = JSON.pages[1].elements[3].elements[1].rowCount + 1;

        if(JSON.pages[1].elements[3].elements[1].defaultValue === undefined)
        {
            JSON.pages[1].elements[3].elements[1].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[3].elements[1].defaultValue.push(tempQuestion);
    }

    if(q.group === "Open Ended Questions")
    {
        JSON.pages[1].elements[4].elements[1].rowCount = JSON.pages[1].elements[4].elements[1].rowCount + 1;

        if(JSON.pages[1].elements[4].elements[1].defaultValue === undefined)
        {
            JSON.pages[1].elements[4].elements[1].defaultValue = [];
        }

        var tempQuestion = {
            "question": "",
            "include": [
             "include"
            ],
           }

        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[4].elements[1].defaultValue.push(tempQuestion);
    }

    if(q.group === "The Lab")
    {
        JSON.pages[1].elements[5].elements[0].defaultValue = ["IncludeLab"]
        JSON.pages[1].elements[5].elements[2].rowCount = JSON.pages[1].elements[5].elements[2].rowCount + 1;

        if(JSON.pages[1].elements[5].elements[2].defaultValue === undefined)
        {
            JSON.pages[1].elements[5].elements[2].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[5].elements[2].defaultValue.push(tempQuestion);
    }

    if(q.group === "The Teaching Assistant")
    {
        JSON.pages[1].elements[6].elements[0].defaultValue = ["Include"]
        JSON.pages[1].elements[6].elements[2].rowCount = JSON.pages[1].elements[6].elements[2].rowCount + 1;

        if(JSON.pages[1].elements[6].elements[2].defaultValue === undefined)
        {
            JSON.pages[1].elements[6].elements[2].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[6].elements[2].defaultValue.push(tempQuestion);
    }

    if(q.group === "The Online Component")
    {
        JSON.pages[1].elements[7].elements[0].defaultValue = ["Include"]
        JSON.pages[1].elements[7].elements[2].rowCount = JSON.pages[1].elements[7].elements[2].rowCount + 1;

        if(JSON.pages[1].elements[7].elements[2].defaultValue === undefined)
        {
            JSON.pages[1].elements[7].elements[2].defaultValue = [];
        }

        var tempQuestion = {
            "1": "",
            "5": "",
            "question": "",
            "include": [
             "include"
            ],
           }
        var tempList = q.helpText.split(",");

        if(q.type === "5")
        {
            tempQuestion["1"] = tempList[0].substring(4)
            tempQuestion["5"] = tempList[1].substring(4)
        }
        else{
            tempQuestion["1"] = "--"
            tempQuestion["5"] = "--"
        }


        tempQuestion.question = q.text;
        if(tempQuestion.mandatory)
        {
            q.mandatory = ["mandatory"];
        }

        JSON.pages[1].elements[7].elements[2].defaultValue.push(tempQuestion);
    }
}

const loadDefaultQuestion = (q, JSON) =>
{   
    if(q.group === "The Instructor")
    {
        JSON.pages[1].elements[1].elements[0].defaultValue[q.text].include = ["include"];

        if(q.mandatory)
        {
            JSON.pages[1].elements[1].elements[0].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }

    if(q.group === "The Course")
    {
        JSON.pages[1].elements[2].elements[0].defaultValue[q.text].include = ["include"];

        if(q.mandatory)
        {
            JSON.pages[1].elements[2].elements[0].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }
    

    if(q.group === "The Assesments")
    {
        JSON.pages[1].elements[3].elements[0].defaultValue[q.text].include = ["include"];

        if(q.mandatory)
        {
            JSON.pages[1].elements[3].elements[0].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }

    if(q.group === "Open Ended Questions")
    {
        if(JSON.pages[1].elements[4].elements[0].defaultValue === undefined)
        {
            JSON.pages[1].elements[4].elements[0].defaultValue = {};
        }

        if(JSON.pages[1].elements[4].elements[0].defaultValue[q.text] === undefined)
        {
            JSON.pages[1].elements[4].elements[0].defaultValue[q.text] = {};
        }

        JSON.pages[1].elements[4].elements[0].defaultValue[q.text].include = ["include"];

        if(q.mandatory)
        {
            JSON.pages[1].elements[4].elements[0].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }

    if(q.group === "The Lab")
    {
        JSON.pages[1].elements[5].elements[1].defaultValue[q.text].include = ["include"];
        JSON.pages[1].elements[5].elements[0].defaultValue = ["IncludeLab"]
        if(q.mandatory)
        {
            JSON.pages[1].elements[5].elements[1].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }

    if(q.group === "The Teaching Assistant")
    {
        JSON.pages[1].elements[6].elements[1].defaultValue[q.text].include = ["include"];
        JSON.pages[1].elements[6].elements[0].defaultValue = ["Include"]
        if(q.mandatory)
        {
            JSON.pages[1].elements[6].elements[1].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }

    if(q.group === "The Online Component")
    {
        JSON.pages[1].elements[7].elements[1].defaultValue[q.text].include = ["include"];
        JSON.pages[1].elements[7].elements[0].defaultValue = ["Include"]
        if(q.mandatory)
        {
            JSON.pages[1].elements[7].elements[1].defaultValue[q.text].mandatory = ["mandatory"];
        }
    }
}