FROM node:12.14.0-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN yarn install

ADD . /usr/src/app
RUN yarn run tsc

CMD ["npm","start"]
