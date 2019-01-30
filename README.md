# Course Evaluation System
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-lightgrey.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) [![Build Status](https://travis-ci.com/stansmall/capstone.svg?branch=master)](https://travis-ci.com/stansmall/capstone)

## Outside Docs
Database https://app.sqldbm.com/SQLServer/Edit/p44622
API      https://app.swaggerhub.com/apis/teameval/Eval/1.0.0

## Purpose of the Product
The University of Maine gives out course evaluation surveys to students at the end of each course. The
survey is filled on a bubble sheet and is then scanned. Harlan Onsrud nds it inconvenient for the school
administrators to manually scan and compile the survey results. Current campus experiments with electronic
evaluations are not fully automated and do not seem to fulll the desires of students and faculty. He desires
an online, automated evaluation system that is responsive to the University's community needs and improves
productivity.

## Product Scope
Team EVAL will create a product which interfaces with an already existing survey software, LimeSurvey, to
provide both individual teachers and administrators the ability to create and administer evaluations. This
product will be usable even by those without technical backgrounds, and it will have an intuitive interface
for setting up and administering teacher evaluations.
It will allow users to create one or more courses with predened survey data and rosters of e-mail
addresses. For each class, users will be able to choose from provided questions or enter their own custom
questions. The question sets that they make may be saved to their account and applied to future evaluations
they create. Upon request of the user, the product will create a LimeSurvey with the supplied information.
It then sends an invitation to complete the survey to the students on the class' roster via e-mail, along with
reminders as appropriate. When the survey is terminated by the instructor/administrator or by a certain
data and time, the product will allow users to view and download a statistical analysis and clear visualization
of the data collected for one or more of their courses.
The software will support the reporting of accumulated data and the appropriate statistics and graphics
derived from it for each academic period. A report will be generated for the following levels: course section,
all sections of the same course, all courses of each instructor, all courses with the same designator (e.g.
\COS"), all courses in the same department/school, all courses in the same college, and all courses in the
same university.
The product will be completed in time to administer teacher evaluations for the spring of 2019 at the
University of Maine, whether evaluation forms are created by instructors or administrators. A UML diagram
below shows the scope as a dotted rectangle.

![alt text](https://raw.githubusercontent.com/stansmall/capstone/master/documents/images/scope.png)

## Set-Up for Developers

To run the databases and React front end, use this command in /capstone:

    sudo docker-compose up

Next, to access the databases using MySQL, use this command:

    mysql -u root -P 4306 -h 127.0.0.1 -p limesurvey
    
The LimeSurvey database is called "limesurvey", and the back-end database is called "mydb".

<br/>

To run the API, you first need Python 3 and pip3 installed. Next, to install the packages required for the API scripts, use this command in /capstone/flask:

    pip3 install -r requirements.txt

Next, run the databases with "docker-compose", then use this command in /capstone/flask:

    python3 -m swagger_server
    
Changing the endpoint specifications requires editing "swagger.yaml".
