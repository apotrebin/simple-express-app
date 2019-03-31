
# **Express**-app-under-test
Simple Express JS application with basic routes for farther automation.</div>
[![CircleCI](https://circleci.com/gh/apotrebin/simple-express-app.svg?style=svg)](https://circleci.com/gh/apotrebin/simple-express-app)

![Image alt text](/public/logo.png)

## Run application:
* ```npm install```
* ```npm start```
* ```localhost:3333```

## Run with docker:
* Exec ```docker run -d -p 8081:3333 akramqa/express```
* Go to ```localhost:8081```

## Use following endpoints:
* Get all users: ```GET /users```
* Get current user: ```GET /users/${userId}```
* Update user: ```PUT /users```
* Create user: ```POST /users```
* Delete user: ```DELETE /users```
