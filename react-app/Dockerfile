FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN rm -rf node_modules && npm install --production --silent

RUN npm install react-google-login
RUN npm install @material-ui/core
RUN npm install survey-react

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
