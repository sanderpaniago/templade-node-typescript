FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3333