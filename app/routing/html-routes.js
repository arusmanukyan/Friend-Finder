var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var path = require('path');

module.exports = function (app) {

	// app.get('/', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '/../public/home.html'));
	// });

	app.get('/questions', function (req, res) {
		res.sendFile(path.join(__dirname, '/../public/questions.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	})
};

