# TimmyFlights
Notification API for being alerted when a publicly trackable aircraft flies over a user
A Backend to store Notifications sign-up's and have that information available for [TimmyFlights-Notification](https://github.com/tim-stephenson/TimmyFlights-Notification)


## Dev notes:

### Compiling Script
The typescript code compiles into javascript in the `dist/` folder and copies `package.json` and `package-lock.json` there with the `"npm run compile"` script. 

### Deployment
This was made to be deployed to a AWS lambda function, with `index.handler` as the handler, and Node.js 16.x

### AWS Lambda Configuration
The API Gateway Trigger is used when deployed as a AWS lambda function

### Future front-end + auth plans
Currently there is no auth to the notification sign up service, This is not great, but not a security concern for the time being. In the future, a front-end with email authentication will be used to sign up for and change notifications based on
