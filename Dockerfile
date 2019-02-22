FROM php:5.6-apache
RUN apt-get update -y && apt-get install -y libpng-dev
RUN docker-php-ext-install pdo_mysql 
RUN docker-php-ext-install gd
WORKDIR /var/www/html/application/commands
RUN php ./console.php installfromconfig /config.php
