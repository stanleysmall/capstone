
export const oAuthClientID = "410688583447-dashcvq6bs4t85lujq542hegi8jf9gmn.apps.googleusercontent.com";


//Questions which require a text box, all other questions will be rated 1-5
export const defaultQuestionList = ["What was done particularly well in the laboratory experience?",
                                    "How could the laboratory be improved?",
                                    "If there was more than one teaching assistant for the course, please name the TA you are evaluating.",
                                    "Name something the teaching assistant did particularly well.",
                                    "Name something the teaching assistant could do better in the future.",
                                    "Please indicate the primary online modality used with the course.",
                                    "Please identify an e-learning aspect of the course that you found particularly valuable or beneficial.",
                                    "Please identify an e-learning aspect of the course that could be improved.",
                                    "Please identify the aspects of this course that were of most value to you.",
                                    "Please mention at least one additional topic or component that you would like to see included in this course.",
                                    "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy."
                                ]


export const exampleOldEvaluation = {
  "URL": "blank.com",
  "instructor": "Sam Elliott",
  "participants": [
    {
      "name": "sam elliott",
      "address": "samuel.elliott@maine.edu"
    }
  ],
  "questions": [
    {
      "ID": 1,
      "helpText": "1 = often unprepared, 5 = well prepared",
      "mandatory": true,
      "group": "The Instructor",
      "type": "5",
      "text": "How prepared was the instructor for class?"
    },
    {
      "ID": 2,
      "helpText": "1 = unclear, 5 = very clear",
      "mandatory": true,
      "group": "The Instructor",
      "type": "5",
      "text": "How clearly were the objectives of the course presented?"
    },
    {
      "ID": 3,
      "helpText": "1 = very little, 5 = very much",
      "mandatory": false,
      "group": "The Instructor",
      "type": "5",
      "text": "How enthusiastic was the instructor about the subject?"
    },
    {
      "ID": 4,
      "helpText": "1 = unclear, 5 = very clear",
      "mandatory": true,
      "group": "The Instructor",
      "type": "5",
      "text": "How clearly did the instructor present concepts, principles and theories?"
    },
    {
      "ID": 5,
      "helpText": "1 = poor, 5 = excellent",
      "mandatory": false,
      "group": "The Instructor",
      "type": "5",
      "text": "Overall, how would you rate the instructor?"
    },
    {
      "ID": 6,
      "helpText": "1 = not at all, 5 = very much",
      "mandatory": true,
      "group": "The Instructor",
      "type": "5",
      "text": "How Much Do you Like The Instructor?"
    },
    {
      "ID": 7,
      "helpText": "1 = not at all, 5 = very much",
      "mandatory": false,
      "group": "The Instructor",
      "type": "5",
      "text": "This one isn't mandatory but do you think hes cool?"
    },
    {
      "ID": 8,
      "helpText": "1 = rarely, 5 = always",
      "mandatory": true,
      "group": "The Course",
      "type": "5",
      "text": "Were class meetings profitable and worth attending?"
    },
    {
      "ID": 9,
      "helpText": "1 = poor, 5 = excellent",
      "mandatory": false,
      "group": "The Course",
      "type": "5",
      "text": "What is you overall rating of the primary readings?"
    },
    {
      "ID": 10,
      "helpText": "1 = very little, 5 = very much",
      "mandatory": false,
      "group": "The Course",
      "type": "5",
      "text": "How much did this course challenge you intellectually?"
    },
    {
      "ID": 11,
      "helpText": "1 = Very bad, 5 = Very Good",
      "mandatory": false,
      "group": "The Course",
      "type": "5",
      "text": "How was the course?"
    },
    {
      "ID": 12,
      "helpText": "1 = unclear, 5 = very clear",
      "mandatory": true,
      "group": "The Assesments",
      "type": "5",
      "text": "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?"
    },
    {
      "ID": 13,
      "helpText": "1 = rarely, 5 = always",
      "mandatory": false,
      "group": "The Assesments",
      "type": "5",
      "text": "Did the assessments reflect the important aspects of the course?"
    },
    {
      "ID": 14,
      "helpText": "1 = Very Easy, 5 = Very Hard",
      "mandatory": false,
      "group": "The Assesments",
      "type": "5",
      "text": "How hard were the assesments?"
    },
    {
      "ID": 15,
      "helpText": "",
      "mandatory": false,
      "group": "Open Ended Questions",
      "type": "T",
      "text": "Please identify the aspects of this course that were of most value to you."
    },
    {
      "ID": 16,
      "helpText": "",
      "mandatory": false,
      "group": "Open Ended Questions",
      "type": "T",
      "text": "Please mention at least one additional topic or component that you would like to see included in this course."
    },
    {
      "ID": 17,
      "helpText": "",
      "mandatory": false,
      "group": "Open Ended Questions",
      "type": "T",
      "text": "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy."
    },
    {
      "ID": 18,
      "helpText": "",
      "mandatory": false,
      "group": "Open Ended Questions",
      "type": "T",
      "text": "Tell me about yourself"
    },
    {
      "ID": 19,
      "helpText": "1 = very little, 5 = very much",
      "mandatory": true,
      "group": "The Lab",
      "type": "5",
      "text": "How much did the laboratory experience contribute to your learning in this course?"
    },
    {
      "ID": 20,
      "helpText": "1 = poor, 5 = excellent",
      "mandatory": false,
      "group": "The Lab",
      "type": "5",
      "text": "Overall, how would you rate the laboratory experience?"
    },
    {
      "ID": 21,
      "helpText": "",
      "mandatory": false,
      "group": "The Lab",
      "type": "T",
      "text": "How could the laboratory experience be improved?"
    },
    {
      "ID": 22,
      "helpText": "1 = no, 5 = yes",
      "mandatory": false,
      "group": "The Lab",
      "type": "5",
      "text": "Did you like the lab?"
    },
    {
      "ID": 23,
      "helpText": "1 = very little, 5 = very much",
      "mandatory": true,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "How much did the teaching assistant contribute to your learning in this course?"
    },
    {
      "ID": 24,
      "helpText": "1 = unconcerned, 5 = very concerned",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "How concerned was the teaching assistant for the quality of student learning?"
    },
    {
      "ID": 25,
      "helpText": "1 = rarely, 5 = always",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "Did the teaching assistant show respect for the questions and opinions of students?"
    },
    {
      "ID": 26,
      "helpText": "1 = very little, 5 = very much",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "Did the teaching assistant inspire confidence in his/her knowledge?"
    },
    {
      "ID": 27,
      "helpText": "1 = poor, 5 = excellent",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "Overall, how would you rate the teaching assistant?"
    },
    {
      "ID": 28,
      "helpText": "",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "T",
      "text": "Name something the teaching assistant could do better in the future."
    },
    {
      "ID": 29,
      "helpText": "1 = Bad, 5 = Good",
      "mandatory": false,
      "group": "The Teaching Assistant",
      "type": "5",
      "text": "How was the teaching assistant?"
    },
    {
      "ID": 30,
      "helpText": "",
      "mandatory": true,
      "group": "The Online Component",
      "type": "T",
      "text": "Please indicate the primary online modality used with the course."
    },
    {
      "ID": 31,
      "helpText": "1 = strongly disagree, 5 = strongly agree",
      "mandatory": true,
      "group": "The Online Component",
      "type": "5",
      "text": "The online modality used with the course was well suited to my needs."
    },
    {
      "ID": 32,
      "helpText": "1 = strongly disagree, 5 = strongly agree",
      "mandatory": false,
      "group": "The Online Component",
      "type": "5",
      "text": "There was adequate opportunity for me to interact with the instructor."
    },
    {
      "ID": 33,
      "helpText": "1 = strongly disagree, 5 = strongly agree",
      "mandatory": false,
      "group": "The Online Component",
      "type": "5",
      "text": "There was adequate opportunity for me to interact with other students."
    },
    {
      "ID": 34,
      "helpText": "",
      "mandatory": false,
      "group": "The Online Component",
      "type": "T",
      "text": "How was taking it online?"
    }
  ],
  "name": "COS125:00001 Spring 2019",
  "courseDesignator": "COS",
  "courseNumber": "125",
  "courseSection": "00001",
  "courseTitle": "computer science",
  "semesterYear": "Spring 2019",
  "facultyUnit": "SCIS",
  "college": "Liberal arts",
  "university": "Umaine",
  "instructorFirst": "Sam",
  "instructorLast": "Elliott",
  "instructorEmail": "se@maine",
  "instructorPhone": "6666666666",
  "adminName": "Sam",
  "adminEmail": "Elliott",
  "beginDate": "0001-11-11",
  "closeDate": "0011-11-11",
  "reminderTime": "11:11",
  "graduateCourse": "N",
  "email_invite": "Subject: Invitation to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE) \n\nDear (FIRSTNAME), Please complete the teaching and course evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE). This student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one of the questions. The software system will send you automatic reminders every few days until you complete the evaluation. To respond, simply click the link at the end of this message. \n\nSincerely, (ADMINNAME) \n---------------------------------------------- \nClick here to complete the teaching and course evaluation: (SURVEYURL) (ADMINNAME) ((ADMINEMAIL) \"",
  "email_remind": "Subject: Reminder to Complete Evaluation for {COURSEDESIGNATOR} {COURSENUMBER} {COURSETITLE}\nDear {FIRSTNAME},\nRecently we invited you to complete a teaching evaluation for “{COURSEDESIGNATOR} {COURSENUMBER}\n{COURSETITLE}”. We note that you have not yet completed the evaluation, and wish to remind you that it is still\navailable should you wish to take part.\nTo participate, please click on the link below.\nThe deadline for completing the evaluation is {CLOSINGDATE} at {TIME}.\nYour participation is extremely important to the improvement of teaching and courses at the {UNIVERSITYNAME}\nSincerely,\n{ADMINNAME}\n----------------------------------------------\nClick here to complete the teaching and course evaluation:\n{SURVEYURL}",
  "published": "F",
  "description": "This is a teaching evaluation for COS125:00001 Spring 2019",
  "welcometext": "Please complete the evaluation for COS125:00001 Spring 2019",
  "endtext": "Thank you for taking this evaluation",
  "email_register": "",
  "email_confirm": ""
};



//JSON which defines which questions users are asked
//when creating a new survey

//Uses surveyjs library to translate into surveys
export const survey = {
  "pages": [
   {
    "name": "Course Information",
    "elements": [
     {
      "type": "html",
      "name": "Page 1 Help",
      "html": "Please enter information pertaining to the course you are going to be evaluating.  Often times the Course Evaluation Administrator and the name of the Instructor are the same."
     },
     {
      "type": "multipletext",
      "name": "CourseInformation",
      "title": "Course Information",
      "items": [
       {
        "name": "courseDesignator",
        "isRequired": true,
        "title": "Course Designator (e.g. MUS)"
       },
       {
        "name": "courseNumber",
        "isRequired": true,
        "title": "Course Number (e.g. 200)"
       },
       {
        "name": "courseSection",
        "isRequired": true,
        "title": "Course Section (e.g. 001)"
       },
       {
        "name": "courseTitle",
        "isRequired": true,
        "title": "Course Title (e.g. Ballroom Dance)"
       },
       {
        "name": "graduateCourse",
        "isRequired": true,
        "title": "Is this a graduate course? (Y/N)"
       },
       {
        "name": "semesterYear",
        "isRequired": true,
        "title": "Semester and Calendar Year (e.g Fall 2019)"
       },
       {
        "name": "facultyUnit",
        "isRequired": true,
        "title": "Name of Faculty Unit ( e.g. School of Music)"
       },
       {
        "name": "college",
        "isRequired": true,
        "title": "Name of College ( e.g. Liberal Arts)"
       },
       {
        "name": "university",
        "isRequired": true,
        "title": "Name of University ( e.g. University of Maine)"
       },
       {
        "name": "instructorFirst",
        "isRequired": true,
        "title": "First Name of Instructor"
       },
       {
        "name": "instructorLast",
        "isRequired": true,
        "title": "Last Name of Instructor"
       },
       {
        "name": "instructorEmail",
        "isRequired": true,
        "title": "Instructor Email"
       },
       {
        "name": "instructorPhone",
        "isRequired": true,
        "title": "Instructor Phone"
       },
       {
        "name": "adminName",
        "isRequired": true,
        "title": "Full Name of Course Evaluation Administrator"
       },
       {
        "name": "adminEmail",
        "isRequired": true,
        "title": "Email of Course Evaluation Administrator"
       },
       {
        "name": "beginDate",
        "isRequired": true,
        "inputType": "date",
        "title": "Beginning Date of Assessments"
       },
       {
        "name": "reminderTime",
        "isRequired": true,
        "inputType": "time",
        "title": "Time of Day to send reminder emails"
       },
       {
        "name": "closeDate",
        "isRequired": true,
        "inputType": "date",
        "title": "Closing Date of Assessments"
       }
      ]
     }
    ]
   },
   {
    "name": "Questions",
    "elements": [
     {
      "type": "html",
      "name": "Page 2 Help",
      "html": "Please select which questions you would like to present to the participants to evaluate the course.  You may select from the set of predefined questions or you may create your own by clicking the add question button in each section.  When viewing results statistics comparing questions to other evaluations will only be provided for predefined questions that are included. <br/><br/>  The questions will be included in the evaluation if you check the include box and participants will be required to answer if you check the required box."
     },
     {
      "type": "panel",
      "name": "The Instructor",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "Instructor Default Questions",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "How prepared was the instructor for class?": {
          "1": "often unprepared",
          "5": "well prepared"
         },
         "How clearly were the objectives of the course presented?": {
          "1": "unclear",
          "5": "very clear"
         },
         "How enthusiastic was the instructor about the subject?": {
          "1": "very little",
          "5": "very much"
         },
         "How clearly did the instructor present concepts, principles and theories?": {
          "1": "unclear",
          "5": "very clear"
         },
         "How much were you encouraged to think for yourselves?": {
          "1": "very little",
          "5": "very much"
         },
         "How concerned was the instructor for the quality of student learning?": {
          "1": "unconcerned",
          "5": "very concerned"
         },
         "Did the instructor show respect for the questions and opinions of the students?": {
          "1": "rarely",
          "5": "always"
         },
         "Did the instructor ensure an environment of respect for all groups of people in the classroom?": {
          "1": "rarely",
          "5": "always"
         },
         "Did the instructor inspire confidence in his/her knowledge?": {
          "1": "very little",
          "5": "very much"
         },
         "Overall, how would you rate the instructor?": {
          "1": "poor",
          "5": "excellent"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "How prepared was the instructor for class?",
         "How clearly were the objectives of the course presented?",
         "How enthusiastic was the instructor about the subject?",
         "How clearly did the instructor present concepts, principles and theories?",
         "How much were you encouraged to think for yourselves?",
         "How concerned was the instructor for the quality of student learning?",
         "Did the instructor show respect for the questions and opinions of the students?",
         "Did the instructor ensure an environment of respect for all groups of people in the classroom?",
         "Did the instructor inspire confidence in his/her knowledge?",
         {
          "value": "Overall, how would you rate the instructor?",
          "text": "*** Overall, how would you rate the instructor?"
         }
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Instructor Custom Questions",
        "title": "Please list further questions to be added regarding the instructor, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best)",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "The Instructor"
     },
     {
      "type": "panel",
      "name": "The Course",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "Course Default Questions",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "Were class meetings profitable and worth attending?": {
          "1": "rarely",
          "5": "always"
         },
         "What is you overall rating of the primary readings?": {
          "1": "poor",
          "5": "excellent"
         },
         "How much did this course challenge you intellectually?": {
          "1": "very little",
          "5": "very much"
         },
         "How much did you learn from this course?": {
          "1": "very little",
          "5": "very much"
         },
         "What is your overall rating of this course?": {
          "1": "poor",
          "5": "excellent"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "Were class meetings profitable and worth attending?",
         "What is you overall rating of the primary readings?",
         "How much did this course challenge you intellectually?",
         "How much did you learn from this course?",
         {
          "value": "What is your overall rating of this course?",
          "text": "*** What is your overall rating of this course?"
         }
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Course Custom Questions",
        "title": "Please list further questions to be added regarding the course, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best)",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "The Course"
     },
     {
      "type": "panel",
      "name": "Assessments",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "Assessment Default Questions",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?": {
          "1": "unclear",
          "5": "very clear"
         },
         "Did the assessments reflect the important aspects of the course?": {
          "1": "rarely",
          "5": "always"
         },
         "How fair were the grading procedures?": {
          "1": "unfair",
          "5": "completely"
         },
         "Overall, how would you rate the assessment process (exams, assignments, projects, papers, etc.)? ": {
          "1": "poor",
          "5": "excellent"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?",
         "Did the assessments reflect the important aspects of the course?",
         "How fair were the grading procedures?",
         "Overall, how would you rate the assessment process (exams, assignments, projects, papers, etc.)? "
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Assessment Custom Questions",
        "title": "Please list further questions to be added regarding the assessment, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best)",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "Assessments"
     },
     {
      "type": "panel",
      "name": "panel2",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "Open Ended Questions",
        "title": "Please select which, if any, of the provided open ended questions you wish to include in in your course evaluation. ",
        "columns": [
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "Please identify the aspects of this course that were of most value to you.",
         "Please mention at least one additional topic or component that you would like to see included in this course.",
         "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy."
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Open Ended Custom Questions",
        "title": "Please list further open ended questions to be added, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best)",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "Open Ended Questions"
     },
     {
      "type": "panel",
      "name": "Laboratory Experience",
      "elements": [
       {
        "type": "checkbox",
        "name": "Include Lab",
        "title": "Did this course have one or more regularly scheduled laboratory session?",
        "choices": [
         {
          "value": "IncludeLab",
          "text": "Yes"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "Lab Default Questions",
        "visibleIf": "{Include Lab} = [\"IncludeLab\"]",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "How much did the laboratory experience contribute to your learning in this course?": {
          "1": "very little",
          "5": "very much"
         },
         "Overall, how would you rate the laboratory experience?": {
          "1": "poor",
          "5": "excellent"
         },
         "What was done particularly well in the laboratory experience?": {
          "1": "--",
          "5": "--"
         },
         "How could the laboratory experience be improved?": {
          "1": "--",
          "5": "--"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "How much did the laboratory experience contribute to your learning in this course?",
         "Overall, how would you rate the laboratory experience?",
         "What was done particularly well in the laboratory experience?",
         "How could the laboratory experience be improved?"
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Lab Custom Questions",
        "visibleIf": "{Include Lab} = [\"IncludeLab\"]",
        "title": "Please list further questions to be added regarding the laboratory experience, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best).  If you would like the question to be open ended enter two dashes (--) for the 1 and 5 value.",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "The Laboratory Experience"
     },
     {
      "type": "panel",
      "name": "Teaching Assistant",
      "elements": [
       {
        "type": "checkbox",
        "name": "Include TA",
        "title": "Was there a teaching assistant supporting this course?",
        "choices": [
         {
          "value": "Include",
          "text": "Yes"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "TA Default Questions",
        "visibleIf": "{Include TA} = [\"Include\"]",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "How much did the teaching assistant contribute to your learning in this course?": {
          "1": "very little",
          "5": "very much"
         },
         "How concerned was the teaching assistant for the quality of student learning?": {
          "1": "unconcerned",
          "5": "very concerned"
         },
         "Did the teaching assistant show respect for the questions and opinions of students?": {
          "1": "rarely",
          "5": "always"
         },
         "Did the teaching assistant inspire confidence in his/her knowledge?": {
          "1": "very little",
          "5": "very much"
         },
         "Overall, how would you rate the teaching assistant?": {
          "1": "poor",
          "5": "excellent"
         },
         "Would you want to have this teaching assistant in the future in another course?": {
          "1": "definitely not",
          "5": "definitely yes"
         },
         "Would you recommend this teaching assistant to assist in this course in the future?": {
          "1": "definitely not",
          "5": "definitely yes"
         },
         "Name something the teaching assistant did particularly well.": {
          "1": "--",
          "5": "--"
         },
         "Name something the teaching assistant could do better in the future.": {
          "1": "--",
          "5": "--"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "How much did the teaching assistant contribute to your learning in this course?",
         "How concerned was the teaching assistant for the quality of student learning?",
         "Did the teaching assistant show respect for the questions and opinions of students?",
         "Did the teaching assistant inspire confidence in his/her knowledge?",
         "Overall, how would you rate the teaching assistant?",
         "Would you want to have this teaching assistant in the future in another course?",
         "Would you recommend this teaching assistant to assist in this course in the future?",
         "Name something the teaching assistant did particularly well.",
         "Name something the teaching assistant could do better in the future."
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "TA Custom Questions",
        "visibleIf": "{Include TA} = [\"Include\"]",
        "title": "Please list further questions to be added regarding the Teaching Assistant, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best).   If you would like the question to be open ended enter two dashes (--) for the 1 and 5 value.",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "The Teaching Assistant"
     },
     {
      "type": "panel",
      "name": "panel1",
      "elements": [
       {
        "type": "checkbox",
        "name": "Include Online",
        "title": "Did this course have a distance learning aspect?",
        "choices": [
         {
          "value": "Include",
          "text": "Yes"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "Online Default Questions",
        "visibleIf": "{Include Online} = [\"Include\"]",
        "title": "Please select which, if any, of the provided questions you wish to include in in your course evaluation. ",
        "defaultValue": {
         "Please indicate the primary online modality used with the course.": {
          "1": "--",
          "5": "--"
         },
         "The online modality used with the course was well suited to my needs.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "There was adequate opportunity for me to interact with the instructor.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "There was adequate opportunity for me to interact with other students.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "The online technologies used in this course worked the way they were supposed to.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "The communication tools were easy to use (email, assignment delivery, exam delivery or proctoring, chat, web, etc.).": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "Technology support was there if I needed it.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "The online experience was well-suited to the way I like to learn.": {
          "1": "strongly disagree",
          "5": "strongly agree"
         },
         "Please identify an e-learning aspect of the course that you found particularly valuable or beneficial": {
          "1": "--",
          "5": "--"
         },
         "Please identify an e-learning aspect of the course that could be improved.": {
          "1": "--",
          "5": "--"
         },
         "How much did you learn in this online class as apposed to a traditional class": {
          "1": "much less",
          "5": "much more"
         },
         "How much did you work in this class as apposed to the traditional format": {
          "1": "much less",
          "5": "much harder"
         }
        },
        "columns": [
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "enableIf": "false"
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make response mandatory?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rows": [
         "Please indicate the primary online modality used with the course.",
         "The online modality used with the course was well suited to my needs.",
         "There was adequate opportunity for me to interact with the instructor.",
         "There was adequate opportunity for me to interact with other students.",
         "The online technologies used in this course worked the way they were supposed to.",
         "The communication tools were easy to use (email, assignment delivery, exam delivery or proctoring, chat, web, etc.).",
         "Technology support was there if I needed it.",
         "The online experience was well-suited to the way I like to learn.",
         "How much did you learn in this online class as apposed to a traditional class",
         "How much did you work in this class as apposed to the traditional format",
         "Please identify an e-learning aspect of the course that you found particularly valuable or beneficial",
         "Please identify an e-learning aspect of the course that could be improved."
        ]
       },
       {
        "type": "matrixdynamic",
        "name": "Online Custom Questions",
        "visibleIf": "{Include Online} = [\"Include\"]",
        "title": "Please list further questions to be added regarding the online component, if any, by clicking the \"Add Question\" button and indicating a 1-5 rating scale (i.e 5 is best).   If you would like the question to be open ended enter two dashes (--) for the 1 and 5 value.",
        "columns": [
         {
          "name": "question",
          "title": "Question",
          "cellType": "comment",
          "isRequired": true,
          "rows": 0
         },
         {
          "name": "1",
          "title": "1 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "5",
          "title": "5 =",
          "cellType": "text",
          "isRequired": true
         },
         {
          "name": "include",
          "title": "Include Question?",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "include",
            "text": "Include"
           }
          ]
         },
         {
          "name": "mandatory",
          "title": "Make Response Mandatory",
          "cellType": "checkbox",
          "choices": [
           {
            "value": "mandatory",
            "text": "Mandatory"
           }
          ]
         }
        ],
        "rowCount": 0,
        "confirmDelete": true,
        "confirmDeleteText": "Are you sure you want to remove this question?",
        "addRowText": "Add Question",
        "removeRowText": "Remove"
       }
      ],
      "title": "The Online Component"
     }
    ]
   },
   {
    "name": "Emails",
    "elements": [
     {
      "type": "panel",
      "name": "panel3",
      "elements": [
       {
        "type": "html",
        "name": "question3",
        "html": " Please insert in the field below the first name, last name and email of each student in the class. The information for each student should appear in a separate row and be separated by commas. (e.g. Mary, Smith, marysmith@qmail.com) You may cut and paste into the window at your option."
       },
       {
        "type": "comment",
        "name": "classRoll",
        "isRequired": true,
        "titleLocation": "hidden"
       },
       {
        "type": "file",
        "name": "csv",
        "title": " Alternatively, upload a comma seperated (.cvs) file with the content being in the format of firstname, lastname, email.",
        "allowImagesPreview": true,
        "maxSize": 0
       }
      ],
      "title": "CLASS ROLL"
     },
     {
      "type": "panel",
      "name": "panel4",
      "elements": [
       {
        "type": "html",
        "name": "html",
        "html": "<b>Initial Email invitation to Participate</b>\n<br/>\nAlthough we recommend that you do not change the following email text, you may edit the Invitation to Participate as\nappropriate for your purposes if needed. Do NOT change any item listed as a {VARIABLE} because this will cause an\nerror in your submission that you will be forced to correct prior to successful submission. This email will be sent to each\nstudent on the begin date at the time you specified above."
       },
       {
        "type": "comment",
        "name": "initialEmail",
        "defaultValue": "Subject: Invitation to Complete Evaluation for {COURSEDESIGNATOR} {COURSENUMBER} {COURSETITLE}\nDear {FIRSTNAME},\nPlease complete the teaching and course evaluation for {COURSEDESIGNATOR} {COURSENUMBER}\n{COURSETITLE}.\n\nThis student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one\nof the questions. The software system will send you automatic reminders every few days until you complete the\nevaluation.\nTo respond, simply click the link at the end of this message.\nSincerely,\n{ADMINNAME}\n----------------------------------------------\nClick here to complete the teaching and course evaluation:\n{SURVEYURL}\n{ADMINNAME} ({ADMINEMAIL})",
        "titleLocation": "hidden"
       },
       {
        "type": "checkbox",
        "name": "Include Reminder",
        "title": "Do you want one or more reminder emails sent to students who have yet to respond after a few days?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         }
        ]
       },
       {
        "type": "html",
        "name": "Reminder Help",
        "visibleIf": "{Include Reminder} = [\"item1\"]",
        "html": "<b>Reminder Emails</b><br/>\nYou may send three reminder emails spaced three days apart to those students who have yet to complete the teaching evaluation. The text\nfor all reminder emails will be identical.\nAlthough we recommend that you do not change the following email text, you may edit the Reminder Emails to students\nas appropriate for your purposes if needed. Do NOT change any item listed as a {VARIABLE} because this will cause an\nerror in your submission that you will be forced to correct prior to successful submission."
       },
       {
        "type": "comment",
        "name": "reminderEmail",
        "visibleIf": "{Include Reminder} = [\"item1\"]",
        "title": "Reminder Emails",
        "defaultValue": "Subject: Reminder to Complete Evaluation for {COURSEDESIGNATOR} {COURSENUMBER} {COURSETITLE}\nDear {FIRSTNAME},\nRecently we invited you to complete a teaching evaluation for “{COURSEDESIGNATOR} {COURSENUMBER}\n{COURSETITLE}”. We note that you have not yet completed the evaluation, and wish to remind you that it is still\navailable should you wish to take part.\nTo participate, please click on the link below.\nThe deadline for completing the evaluation is {CLOSINGDATE} at {TIME}.\nYour participation is extremely important to the improvement of teaching and courses at the {UNIVERSITYNAME}\nSincerely,\n{ADMINNAME}\n----------------------------------------------\nClick here to complete the teaching and course evaluation:\n{SURVEYURL}",
        "titleLocation": "hidden"
       }
      ],
      "title": "Emails to be Sent to Students"
     },
     {
      "type": "html",
      "name": "Submit Text",
      "html": "Please double check all information provided on the evaluation.  Once you click Save Evaluation you will be able to make changes to any information provided by navigating the the evaluation using the edit evaluation option.  However if you choose to publish the evaluation after saving you WILL NOT be able to make changes.\n<br/><br/>\n<B>IMPORTANT:</B> You have NOT successfully completed your assessment submission until you have saved the evaluation and clicked the PUBLISH button."
     }
    ]
   }
  ],
  "showNavigationButtons": "both",
  "showCompletedPage": false,
  "showQuestionNumbers": "off",
  "completeText": "Save Evaluation"
 };


