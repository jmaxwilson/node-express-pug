FROM node:latest

WORKDIR /usr/src/app 
ENV NODE_PATH=/usr/local/lib/node_modules
RUN npm install -g nodemon express pug

EXPOSE 8080
CMD [ "nodemon", "server.js" ]

