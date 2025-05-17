FROM node:23.11.1-alpine3.21
MAINTAINER Akram Potrebin <apotrebin@gmail.com>
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]
