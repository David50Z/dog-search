# DogSearch

Hello! This application is the begining of an improved version of dog ceo's front end website. You can get random images of dogs by breed and sub-breed. 

This application uses Express, Angular, and Typescript. I used Express to serve Angular components, handle the back-end, and make calls to the dog ceo API.

To start the application run the command npm install, then run node server.cjs, type localhost:3000 into your browser, and you are all set!

I set up some tests using Angular's built in testing framework, Jasmine and Karma. To run said tests, activate a server for both the front and back-end part of this application. The test needs the server part of this application to be running on a seperate terminal. Grab up two terminals, go to the dog-client folder, and run node server.cjs on one terminal, then run ng test on the other. You should be all set. 
