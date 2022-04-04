/*
  COMP 2068 - Real Time Chat Group
*/

// Import required modules
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//!Step4a: Install the socket.io package

//!Step4b: Initalize socket.io
// set up socket.io

//!Step3A: Connect To MongoDB
// set up mongoose and message model
// as well as connect the mongoose
var mongoose = require('mongoose');
var dbUrl = "mongodb+srv://masonDouglas:superpassword@cluster0.i4b1t.mongodb.net/realchat";
var conn = mongoose.connection;
mongoose.connect(dbUrl , (err) => { 
  if (err == null) {
    console.log('Mongoose is connected!');
  }
  else {
    console.log('Mongoose is not connected...', err);
  }
});
//!Step3B: Create a model for messages
var Message = mongoose.model('message',{time : String, username : String, message : String});

// !Step1: Set up Routing And Port for web app
// Load index.html on empty url
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// io.on connection method
// finds a message object in a database
// to load messages to the main page
// saves a user message to the db
// using .save function
//!Step5: Setup the socket.io connection

// port
const { PORT=3000 } = process.env;
server.listen(PORT, () => {
    console.log('listening on *:3000');
});
