//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req,res) {
	res.send ("Welcome to my first Node.js web site. <br/> Check out my <ul> <li> <a href='/contact'>contact</a> </li> <li><a href='/bio'>bio</a></li>");
});

//contact page
app.get("/contact", function(req,res) {
	res.send ("My name is Srikanth Jilla, and you can contact me at jilla01@email.franklin.edu");
});

//bio page
app.get("/bio", function(req,res) {
	res.send ("I am a Data Analytics student.");
});

app.listen(8002)