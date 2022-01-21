FROM node:16-stretch-slim

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm","run","serve"]