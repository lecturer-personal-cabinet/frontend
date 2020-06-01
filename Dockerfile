# build environment
FROM node:11.13 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN yarn install
RUN yarn global add react-scripts@2.1.8

COPY ./package-lock.json /usr/src/app/
COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src


RUN yarn build

# production environment
FROM nginx:1.15.10-alpine
COPY --from=builder /usr/src/app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]