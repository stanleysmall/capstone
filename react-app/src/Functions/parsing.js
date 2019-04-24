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
        evalTemplate.graduateCourse = true;
    }
    else
    {
        evalTemplate.graduateCourse = false;
    }


    //email_invite          <------------------------------------------ breaks naming convention, required tag name by API
    evalTemplate.email_invite = survey.data.initialEmail;
    //email_reminder        <------------------------------------------ breaks naming convention, required tag name by API
    evalTemplate.email_reminder = survey.data.reminderEmail;

    evalTemplate.published = false;
    //-------------------------------------------------TODO-------------------------------------------------------
    //description
    //welcometext
    //endtext
    //email_register
    //email_confirm

    
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
    //store values to populate first page in an array
    var newValues = [
                    evaluation.courseDesignator,
                    evaluation.courseNumber,
                    evaluation.courseSection,
                    evaluation.courseTitle,
                    evaluation.semesterYear,                             //Don't populate the semester/year
                    evaluation.facultyUnit,
                    evaluation.college,
                    evaluation.university,
                    evaluation.instructorFirst,
                    evaluation.instructorLast,
                    evaluation.instructorEmail,
                    evaluation.instructorPhone,
                    evaluation.adminName,
                    evaluation.adminEmail,
                    evaluation.beginDate,                             //Don't populate the being/end date
                    evaluation.closeDate,
                    evaluation.reminderTime      
    ]

    //Populate the surveyJSON with default values for the first page
    for(var i = 0; i < newValues.length; i++)
    {
        surveyJSON.pages[0].elements[i].defaultValue = newValues[i];
    }

    //Indices of question sets in the second page elements
    var questionSets = [0,1,2,4,6,8,9];

    //Set default values of all questions on page 2 to do not include
    for(i = 0; i < questionSets.length; i++)
    {
        //Store the currentDataSet, for readability
        var currentDataSet = surveyJSON.pages[1].elements[questionSets[i]].defaultValue;

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
        currentQuestion = evaluation.questions[i].text;

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
                surveyJSON.pages[1].elements[3].defaultValue = "true";
                break;
            case "Teaching Assistant Questions":
                questionSet = 6;
                //If a teaching assistant question exists than set the value of was there a teaching assistent to true
                surveyJSON.pages[1].elements[5].defaultValue = "true";
                break;
            case "Online Questions":
                questionSet = 8;
                //if an online question exists than set the value of was there an online component to true
                surveyJSON.pages[1].elements[7].defaultValue = "true";
                break;
            case "Open Ended Questions":
                questionSet = 9;
                break;
            default:
                questionSet = -1
                break;
        }

        //If the question was mandatory set its corresponding default value to manditory
        if(evaluation.questions[i].mandatory)
        {
            surveyJSON.pages[1].elements[questionSet].defaultValue[currentQuestion].Inclusion = "Mandatory"
        }
        //Else set default value to Include
        else
        {
            surveyJSON.pages[1].elements[questionSet].defaultValue[currentQuestion].Inclusion = "Include"
        }
    }

    //Populate the surveyJSON with default values for the third page
    surveyJSON.pages[2].elements[1].defaultValue = evaluation.email_invite;
    surveyJSON.pages[2].elements[3].defaultValue = evaluation.email_reminder;

    //Turn classroll from eval into CSV format
    var classRoll = "";
    for(i = 0; i < evaluation.participants.length; i ++)
    {
        var names = evaluation.participants[i].name.split(" ");
        classRoll = classRoll + names[0] + "," + names[1] + "," + evaluation.participants[i].address + "\n";
    }

    surveyJSON.pages[2].elements[0].defaultValue = classRoll;

    return surveyJSON;
}