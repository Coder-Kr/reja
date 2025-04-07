FROM node:18.12.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js
