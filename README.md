
# **Express**-app-under-test
Simple Express JS application with basic routes for farther automation.</div>
<br/>
[![Build Status](https://travis-ci.com/apotrebin/simple-express-app.svg?branch=master)](https://travis-ci.com/apotrebin/simple-express-app)  [![CircleCI](https://circleci.com/gh/apotrebin/simple-express-app.svg?style=svg)](https://circleci.com/gh/apotrebin/simple-express-app)

![Image alt text](/public/logo.png)

## Run application:
* ```npm install```
* ```npm start```
* ```localhost:3333```

## Run with docker:
* ```docker run -d -p 8081:3333 akramqa/express```
* ```localhost:8081```

## Do tests directly on heroku
* https://api-test-app-simple.herokuapp.com/

## Use following endpoints:
* Get all users: ```GET /users```
* Get current user: ```GET /users/:id```
* Create user: ```POST /users```
```
{
    "username":"Akram P",
    "role":"admin",
    "email":"akramp@notexistingemaildoma.in"
}
```

* Edit user: ```PUT /users```
```
{
    "_id":4,
    "username":"Akram P",
    "role":"admin",
    "email":"akramp@notexistingemaildoma.in"
}
```

* Delete user: ```DELETE /users/:id```
