FROM node:8.9-alpine

# If you're using yarn:
#  yarn build
RUN npm install --production --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
