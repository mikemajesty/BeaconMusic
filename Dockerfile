FROM node:argon

RUN mkdir /src

RUN npm update -g
RUN npm install
RUN npm install -g gulp nodemon

#ADD aws-credentials /root/.aws/credentials

WORKDIR /src

RUN npm install node-sass

EXPOSE 8080

CMD node server.js
