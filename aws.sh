# AWS CONFIG FILE
# run these commands on a new EC2 instance
# wget -O - https://raw.githubusercontent.com/stansmall/capstone/master/aws.sh | bash

sudo yum update -y
sudo yum install git -y
git clone https://github.com/stansmall/capstone.git 
cd capstone
pwd
sudo git clone https://github.com/LimeSurvey/LimeSurvey.git
sudo chmod -R 777 LimeSurvey/
sudo yum install -y docker 
sudo curl -L https://github.com/docker/compose/releases/download/1.20.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose 
sudo service docker start 
sudo usermod -a -G docker ec2-user 
cd react-app
pwd
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash 
. ~/.nvm/nvm.sh 
nvm install 11.9.0 
npm install
npm audit fix
cd ../flask/swagger_server
git clone https://github.com/TaiSHiNet/lime-py-api.git

# close the session and log back in
# cd capstone
# docker-compose up -d
# cd data
# sudo chmod -R 0777 ./ 
