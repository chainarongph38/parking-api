FROM node:alpine

USER root

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install

CMD [ "npm", "start" ]
EXPOSE 3000