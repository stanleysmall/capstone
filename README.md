# Course Evaluation System
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-lightgrey.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) [![Build Status](https://travis-ci.com/stansmall/capstone.svg?branch=master)](https://travis-ci.com/stansmall/capstone)

# Purpose of the Product
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

# Set-Up for Developers

1. Go to your EC2 Dashboard in your AWS account. Click on "Instances", then "Launch Instance". Select the first AMI, then click "Review and Launch", then "Launch". Select "Create a new key pair". Name it "limesurvey", and download the key. Click on "Launch Instances".

2. In the left pane, click "Security Groups", right-click the group with its name starting with "launch-wizard", then click "Edit inbound rules". Add three new rules, with their ports being 80, 5000, and 8080 respectively, and their source being Anywhere. Click on "Save".

3. In your console, execute `ssh -i "limesurvey.pem" ec2-user@ec2-x-x-x-x.us-east-2.compute.amazonaws.com` with the x’s replaced by the fields in the instance’s IP address (see "IPv4 Public IP"). (Or right-click on the instance, click Connect, and copy and paste the example command.)

4. Enter "yes" when prompted, then run `wget -O - https://raw.githubusercontent.com/stansmall/capstone/master/aws.sh | bash`. After installation is finished, exit ssh with the command `exit`, then execute the ssh command again.

5. Execute `cd capstone`, then `docker-compose up -d`. After installation is finished, in your web browser, enter x.x.x.x:5000, with the x’s replaced by the instance’s IP address ("IPv4 Public IP").

6. Click "Start installation", "I accept", and "Next". In the database configuration, enter 10.5.0.6 for the location, "root" for the username and password, and "limesurvey" for the database name. Click "Create database", then "Populate database". Click "Next" to use the default LimeSurvey credentials.

7. Click "Administration", and log in with your credentials. Go to "Configuration", then "Global settings", then "Interfaces". Click on "JSON-RPC" then the toggle below. Click "Save".

8. Execute `mysql -h 10.5.0.6 -u root -p < /home/ec2-user/capstone/sql/create_tables.sql`, then `mysql -h 10.5.0.6 -u root -p mydb < /home/ec2-user/capstone/sql/insert_mock_data.sql`, entering "root" as the password both times.

9. Start Docker up again. Test the API by entering in the web browser http://x.x.x.x:8080/teameval/Eval/1.0.0/survey?name=COS%20140%20001, with the x’s replaced by your instance’s IP address.

10. It is recommended to mount your instance's capstone directory on your local machine. To do this, execute `sshfs ec2-user@ec2-x.x.x.x.us-east-2.compute.amazonaws.com:./capstone [relative path to local folder] -o IdentityFile=[full path to limesurvey.pem]`, with the x's being the instance's IP address. 

To see your changes to the code, run `docker-compose build flask` or `docker-compose build react` (depending on the component), then `docker-compose up -d` (omit the "-d" to see debug info). Stop Docker with `docker-compose stop`. To start up MySQL, run the command `mysql -h 10.5.0.6 -u root -p` and enter the password "root". The back-end database is called  "mydb". To log in to LimeSurvey, enter http://x.x.x.x:5000/index.php/admin/ in your web browser (with the x’s being your instance’s IP address). You may need to edit "swagger.yaml" to change the API endpoint specifications.

![alt text](https://raw.githubusercontent.com/stansmall/capstone/master/documents/images/scope_diagram.png)
