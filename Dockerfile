FROM node:16-buster-slim

RUN apt-get update

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install && npm i -g nodemon

CMD ["nodemon", "--legacy-watch", "index.js"]