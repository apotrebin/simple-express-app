FROM node:21.2-alpine3.18
MAINTAINER Akram Potrebin <apotrebin@gmail.com>
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]
