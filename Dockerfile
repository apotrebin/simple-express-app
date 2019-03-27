FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add --no-cache libc6-compat
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]
