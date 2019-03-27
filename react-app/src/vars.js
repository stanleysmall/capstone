
export const oAuthClientID = "120537157290-mtdj0mjahrhvq284uqguu8j5hophplc5.apps.googleusercontent.com";


//Questions which require a text box, all other questions will be rated 1-5
export const openEndedQuestionList = ["What was done particularly well in the laboratory experience?",
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
        "name": "test testlast",
        "address": "test@"
      },
      {
        "name": "test2 testlast2",
        "address": "test2@"
      }
    ],
    "questions": [
      {
        "ID": 1,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Course Questions",
        "type": "5",
        "text": "Were class meetings profitable and worth attending?"
      },
      {
        "ID": 2,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Course Questions",
        "type": "5",
        "text": "What is your overall rating of the primary readings?"
      },
      {
        "ID": 3,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Course Questions",
        "type": "5",
        "text": "How much did this course challenge you intelectually?"
      },
      {
        "ID": 4,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Course Questions",
        "type": "5",
        "text": "How much did you learn from this course?"
      },
      {
        "ID": 5,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Assesment Questions",
        "type": "5",
        "text": "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?"
      },
      {
        "ID": 6,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Assesment Questions",
        "type": "5",
        "text": "Did the assessments reflect the important aspects of the course?"
      },
      {
        "ID": 7,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Assesment Questions",
        "type": "5",
        "text": "How fair were the grading procedures?"
      },
      {
        "ID": 8,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Assesment Questions",
        "type": "5",
        "text": "Overall how would you rate the assessment process (exams, assignments, projects, papers, etc.)?"
      },
      {
        "ID": 9,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Instructor Questions",
        "type": "5",
        "text": "how prepared was the instructor for the class?"
      },
      {
        "ID": 10,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Instructor Questions",
        "type": "5",
        "text": "How clearly were the objectives of the course presented?"
      },
      {
        "ID": 11,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Instructor Questions",
        "type": "5",
        "text": "How enthusiastic was the instructor about the subject?"
      },
      {
        "ID": 12,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Instructor Questions",
        "type": "5",
        "text": "How clearly did the instructor present concepts, principles and theories?"
      },
      {
        "ID": 13,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Instructor Questions",
        "type": "5",
        "text": "Did the instructor show respect for the questions and opinions of the students?"
      },
      {
        "ID": 14,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Instructor Questions",
        "type": "5",
        "text": "Did the instructor ensure an environment of respect for all groups of people in the classroom?"
      },
      {
        "ID": 15,
        "helpText": "1 is low, 5 is high",
        "mandatory": true,
        "group": "Instructor Questions",
        "type": "5",
        "text": "Did the instructor inspire confidence in his/her knowledge?"
      },
      {
        "ID": 16,
        "helpText": "1 is low, 5 is high",
        "mandatory": false,
        "group": "Lab Questions",
        "type": "5",
        "text": "How much did the laboratory experience contribute to your learning in this course"
      },
      {
        "ID": 17,
        "helpText": "",
        "mandatory": false,
        "group": "Lab Questions",
        "type": "T",
        "text": "What was done particularly well in the laboratory experience?"
      },
      {
        "ID": 18,
        "helpText": "",
        "mandatory": true,
        "group": "Lab Questions",
        "type": "T",
        "text": "How could the laboratory be improved?"
      },
      {
        "ID": 19,
        "helpText": "",
        "mandatory": false,
        "group": "Open Ended Questions",
        "type": "T",
        "text": "Please identify the aspects of this course that were of most value to you."
      },
      {
        "ID": 20,
        "helpText": "",
        "mandatory": false,
        "group": "Open Ended Questions",
        "type": "T",
        "text": "Please mention at least one additional topic or component that you would like to see included in this course."
      },
      {
        "ID": 21,
        "helpText": "",
        "mandatory": true,
        "group": "Open Ended Questions",
        "type": "T",
        "text": "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy."
      }
    ],
    "name": "COS140:001 Spring 2019",
    "courseDesignator": "COS",
    "courseNumber": "140",
    "courseSection": "001",
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
    "email_invite": "Subject: Invitation to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE) \n\nDear (FIRSTNAME), Please complete the teaching and course evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE). This student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one of the questions. The software system will send you automatic reminders every few days until you complete the evaluation. To respond, simply click the link at the end of this message. \n\nSincerely, (ADMINNAME) \n---------------------------------------------- \nClick here to complete the teaching and course evaluation: (SURVEYURL) (ADMINNAME) ((ADMINEMAIL) \""
  };



//JSON which defines which questions users are asked
//when creating a new survey

//Uses surveyjs library to translate into surveys
export const survey = {
    pages: [
     {
      name: "Course Information",
      elements: [
       {
        type: "text",
        name: "courseDesignator",
        title: "Course Designator",
        isRequired: true
       },
       {
        type: "text",
        name: "courseNumber",
        title: "Course Number",
        isRequired: true
       },
       {
        type: "text",
        name: "courseSection",
        title: "Course Section",
        isRequired: true
       },
       {
        type: "text",
        name: "courseTitle",
        title: "Course Title",
        isRequired: true
       },
       {
        type: "text",
        name: "semesterYear",
        title: "Semester and Calendar Year",
        isRequired: true
       },
       {
        type: "text",
        name: "facultyUnit",
        title: "Name of Faculty Unit",
        isRequired: true
       },
       {
        type: "text",
        name: "college",
        title: "Name of College",
        isRequired: true
       },
       {
        type: "text",
        name: "university",
        title: "Name of University",
        isRequired: true
       },
       {
        type: "text",
        name: "instructorFirst",
        title: "First Name of Instructor",
        isRequired: true
       },
       {
        type: "text",
        name: "instructorLast",
        startWithNewLine: false,
        title: "Last Name of Instructor",
        isRequired: true
       },
       {
        type: "text",
        name: "instructorEmail",
        title: "Instructor Email",
        isRequired: true
       },
       {
        type: "text",
        name: "instructorPhone",
        title: "Instructor Phone",
        isRequired: true
       },
       {
        type: "text",
        name: "adminName",
        title: "Full Name of Course Evaluation Administrator",
        isRequired: true
       },
       {
        type: "text",
        name: "adminEmail",
        title: "Email of Course Evaluation Administrator",
        isRequired: true
       },
       {
        type: "text",
        name: "beginDate",
        title: "Beginning Date of Assessments",
        isRequired: true,
        inputType: "date"
       },
       {
        type: "text",
        name: "closeDate",
        title: "Closing Date of Assessments",
        isRequired: true,
        inputType: "date"
       },
       {
        type: "text",
        name: "reminderTime",
        title: "Time of Day to Send Reminder Emails",
        isRequired: true,
        inputType: "time"
       }
      ],
      title: "Course Information"
     },
     {
      name: "Questions",
      elements: [
       {
        type: "matrixdropdown",
        name: "instructorQuestions",
        title: "The Instructor",
        defaultValue: {
         "how prepared was the instructor for the class?": {
          Inclusion: "Include"
         },
         "How clearly were the objectives of the course presented?": {
          Inclusion: "Include"
         },
         "How enthusiastic was the instructor about the subject?": {
          Inclusion: "Include"
         },
         "How clearly did the instructor present concepts, principles and theories?": {
          Inclusion: "Include"
         },
         "How much were you encouraged to think for yourselves?": {
          Inclusion: "Include"
         },
         "How concerned was the instructor for the quality of student learning?": {
          Inclusion: "Include"
         },
         "Did the instructor show respect for the questions and opinions of the students?": {
          Inclusion: "Include"
         },
         "Did the instructor ensure an environment of respect for all groups of people in the classroom?": {
          Inclusion: "Include"
         },
         "Did the instructor inspire confidence in his/her knowledge?": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "how prepared was the instructor for the class?",
         "How clearly were the objectives of the course presented?",
         "How enthusiastic was the instructor about the subject?",
         "How clearly did the instructor present concepts, principles and theories?",
         "How much were you encouraged to think for yourselves?",
         "How concerned was the instructor for the quality of student learning?",
         "Did the instructor show respect for the questions and opinions of the students?",
         "Did the instructor ensure an environment of respect for all groups of people in the classroom?",
         "Did the instructor inspire confidence in his/her knowledge?"
        ]
       },
       {
        type: "matrixdropdown",
        name: "courseQuestions",
        title: "The Course",
        defaultValue: {
         "Were class meetings profitable and worth attending?": {
          Inclusion: "Include"
         },
         "What is your overall rating of the primary readings?": {
          Inclusion: "Include"
         },
         "How much did this course challenge you intelectually?": {
          Inclusion: "Include"
         },
         "How much did you learn from this course?": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "Were class meetings profitable and worth attending?",
         "What is your overall rating of the primary readings?",
         "How much did this course challenge you intelectually?",
         "How much did you learn from this course?"
        ]
       },
       {
        type: "matrixdropdown",
        name: "assesmentQuestions",
        title: "Assements",
        defaultValue: {
         "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?": {
          Inclusion: "Include"
         },
         "Did the assessments reflect the important aspects of the course?": {
          Inclusion: "Include"
         },
         "How fair were the grading procedures?": {
          Inclusion: "Include"
         },
         "Overall how would you rate the assessment process (exams, assignments, projects, papers, etc.)?": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?",
         "Did the assessments reflect the important aspects of the course?",
         "How fair were the grading procedures?",
         "Overall how would you rate the assessment process (exams, assignments, projects, papers, etc.)?"
        ]
       },
       {
        type: "radiogroup",
        name: "includeLabQuestions",
        title: "Did this course have one or more regularly scheduled laboratory sessions?",
        defaultValue: "false",
        choices: [
         {
          value: "true",
          text: "Yes"
         },
         {
          value: "false",
          text: "No"
         }
        ]
       },
       {
        type: "matrixdropdown",
        name: "labQuestions",
        visibleIf: "{includeLabQuestions} = \"true\"",
        title: "The Laboratory Experience",
        defaultValue: {
         "How much did the laboratory experience contribute to your learning in this course": {
          Inclusion: "Include"
         },
         "What was done particularly well in the laboratory experience?": {
          Inclusion: "Include"
         },
         "How could the laboratory be improved?": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "How much did the laboratory experience contribute to your learning in this course",
         "What was done particularly well in the laboratory experience?",
         "How could the laboratory be improved?"
        ]
       },
       {
        type: "radiogroup",
        name: "includeTeachingAssistantQuestions",
        title: "Was there a teaching assistant supporting this course?",
        defaultValue: "false",
        choices: [
         {
          value: "true",
          text: "Yes"
         },
         {
          value: "false",
          text: "No"
         }
        ]
       },
       {
        type: "matrixdropdown",
        name: "teachingAssistantQuestions",
        visibleIf: "{includeTeachingAssistantQuestions} = \"true\"",
        title: "The Teaching Assistant",
        defaultValue: {
         "If there was more than one teaching assistant for the course, please name the TA you are evaluating.": {
          Inclusion: "Include"
         },
         "How much did the teaching assistant contribute to your learning in this course?": {
          Inclusion: "Include"
         },
         "How concerned was the teaching assistant for the quality of student learning?": {
          Inclusion: "Include"
         },
         "Did the teaching asssistant show respect for the questions and opinions of students?": {
          Inclusion: "Include"
         },
         "Would you want to have this teaching assistant in the future in another course?": {
          Inclusion: "Include"
         },
         "Would you recommend this teaching assistant to assist in this course in the future?": {
          Inclusion: "Include"
         },
         "Name something the teaching assistant did particularly well.": {
          Inclusion: "Include"
         },
         "Name something the teaching assistant could do better in the future.": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "If there was more than one teaching assistant for the course, please name the TA you are evaluating.",
         "How much did the teaching assistant contribute to your learning in this course?",
         "How concerned was the teaching assistant for the quality of student learning?",
         "Did the teaching asssistant show respect for the questions and opinions of students?",
         "Would you want to have this teaching assistant in the future in another course?",
         "Would you recommend this teaching assistant to assist in this course in the future?",
         "Name something the teaching assistant did particularly well.",
         "Name something the teaching assistant could do better in the future."
        ]
       },
       {
        type: "radiogroup",
        name: "includeOnlineQuestions",
        title: "Was this course offered as a distance learning course?",
        defaultValue: "false",
        choices: [
         {
          value: "true",
          text: "Yes"
         },
         {
          value: "false",
          text: "No"
         }
        ]
       },
       {
        type: "matrixdropdown",
        name: "onlineQuestions",
        visibleIf: "{includeOnlineQuestions} = \"true\"",
        title: "Online Component Assessment",
        defaultValue: {
         "Please indicate the primary online modality used with the course.": {
          Inclusion: "Include"
         },
         "The online modality used with the course was well suited to my needs.": {
          Inclusion: "Include"
         },
         "There was adequate opportunity for me to interact with the instructor.": {
          Inclusion: "Include"
         },
         "The online technologies used in this course worked the way they were supposed to.": {
          Inclusion: "Include"
         },
         "The communication tools were easy to use (email, assignment delivery, exam delivery or proctoring, chat, web, etc.).": {
          Inclusion: "Include"
         },
         "Technology support was there if I needed it.": {
          Inclusion: "Include"
         },
         "The online experience was well-suited to the way I like to learn.": {
          Inclusion: "Include"
         },
         "Which statement best characterizes your belief after having taken this course?": {
          Inclusion: "Include"
         },
         "Please identify an e-learning aspect of the course that you found particularly valuable or beneficial.": {
          Inclusion: "Include"
         },
         "Please identify an e-learning aspect of the course that could be improved.": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "Please indicate the primary online modality used with the course.",
         "The online modality used with the course was well suited to my needs.",
         "There was adequate opportunity for me to interact with the instructor.",
         "The online technologies used in this course worked the way they were supposed to.",
         "The communication tools were easy to use (email, assignment delivery, exam delivery or proctoring, chat, web, etc.).",
         "Technology support was there if I needed it.",
         "The online experience was well-suited to the way I like to learn.",
         "Which statement best characterizes your belief after having taken this course?",
         "Please identify an e-learning aspect of the course that you found particularly valuable or beneficial.",
         "Please identify an e-learning aspect of the course that could be improved."
        ]
       },
       {
        type: "matrixdropdown",
        name: "openEndedQuestions",
        title: "Open Ended Questions",
        defaultValue: {
         "Please identify the aspects of this course that were of most value to you.": {
          Inclusion: "Include"
         },
         "Please mention at least one additional topic or component that you would like to see included in this course.": {
          Inclusion: "Include"
         },
         "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy.": {
          Inclusion: "Include"
         }
        },
        isRequired: true,
        columns: [
         {
          name: "Inclusion",
          cellType: "radiogroup",
          isRequired: true,
          choices: [
           "Include",
           "Mandatory",
           "Do not include"
          ]
         }
        ],
        choices: [
         {
          value: "include",
          text: "Include"
         },
         {
          value: "mandatory",
          text: "Mandatory"
         },
         {
          value: "do not include",
          text: "Do not include"
         }
        ],
        rows: [
         "Please identify the aspects of this course that were of most value to you.",
         "Please mention at least one additional topic or component that you would like to see included in this course.",
         "Please make any additional comments that you desire to make about the course instructor, materials or pedagogy."
        ]
       }
      ],
      title: "Questions"
     },
     {
      name: "Enroll",
      elements: [
       {
        type: "comment",
        name: "classRoll",
        title: "Please insert in the field below the first name, last name, and email of each student in the class. \nThe information for each student should appear in a separate row and be separated by commas. (e.g Mary, Smith, marysmith@qmail.com) \nYou may cut and paste into the window at your option.",
        isRequired: true,
        rows: 10,
        placeHolder: "Mary,Smith,marysmith@qmail.com\nJohn,Smith,johnsmith@qmail.com "
       },
       {
        type: "comment",
        name: "initialEmail",
        title: "Initial Email invitation to Participate",
        defaultValue: "Subject: Invitation to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE) \n\nDear (FIRSTNAME), Please complete the teaching and course evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE). This student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one of the questions. The software system will send you automatic reminders every few days until you complete the evaluation. To respond, simply click the link at the end of this message. \n\nSincerely, (ADMINNAME) \n---------------------------------------------- \nClick here to complete the teaching and course evaluation: (SURVEYURL) (ADMINNAME) ((ADMINEMAIL) \"",
        isRequired: true,
        rows: 10
       },
       {
        type: "radiogroup",
        name: "includeReminders",
        title: "Do you want reminder emails to be sent to students who have yet to respond after a few days?",
        defaultValue: "false",
        choices: [
         {
          value: "true",
          text: "Yes"
         },
         {
          value: "false",
          text: "No"
         }
        ]
       },
       {
        type: "comment",
        name: "reminderEmail",
        visibleIf: "{includeReminders} = \"true\"",
        title: "Reminder Email",
        defaultValue: "Subject: Reminder to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE)\n\nDear (FIRSTNAME), Recently we invited you to complete a teaching evaluation for “(COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE)”. We note that you have not yet completed the evaluation, and wish to remind you that it is still available should you wish to take part. To participate, please click on the link below. The deadline for completing the evaluation is (CLOSINGDATE) at (TIM). Your participation is extremely important to the improvement of teaching and courses at the (UNIVERSITYNAME) \n\nSincerely, (ADMINNAME) \n---------------------------------------------- \nClick here to complete the teaching and course evaluation: (SURVEYURL)",
        isRequired: true,
        rows: 10
       }
      ],
      title: "Enroll"
     }
    ],
    showNavigationButtons: "both",
    showQuestionNumbers: "off",
    pagePrevText: "Back",
    pageNextText: "Next",
    completeText: "Submit"
   };