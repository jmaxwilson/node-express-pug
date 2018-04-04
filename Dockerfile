FROM node:latest

WORKDIR /usr/src/app 
RUN npm install
RUN npm install -g nodemon
RUN cd /usr/src/app & npm install pug

EXPOSE 8080
CMD [ "nodemon", "server.js" ]

