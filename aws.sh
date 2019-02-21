# AWS CONFIG FILE
# run these commands on a new EC2 instance
# wget -O - https://raw.githubusercontent.com/stansmall/capstone/master/aws.sh | bash

# install required packages
sudo yum update -y
sudo yum install git -y
sudo yum install docker -y 
sudo yum install mysql -y

# clone the repository and limesurvey
git clone https://github.com/stansmall/capstone.git 
cd capstone
sudo git clone https://github.com/LimeSurvey/LimeSurvey.git
sudo chmod -R 777 LimeSurvey/
sudo chmod -R 777 data/
mv config.php LimeSurvey/application/config/config.php

# install node modules
cd react-app
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash 
. ~/.nvm/nvm.sh 
nvm install 11.9.0 
npm install
npm audit fix

# install lime-py-api
cd ../flask/swagger_server
git clone https://github.com/TaiSHiNet/lime-py-api.git
mv lime-py-api lime_py_api
cd ../..

# start docker
sudo service docker start 
sudo usermod -a -G docker ec2-user 
sudo curl -L https://github.com/docker/compose/releases/download/1.20.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose 

# mysql -h 10.5.0.6 -u root -p < /home/ec2-user/capstone/sql/create_tables.sql
# mysql -h 10.5.0.6 -u root -p mydb < /home/ec2-user/capstone/sql/insert_mock_data.sql

