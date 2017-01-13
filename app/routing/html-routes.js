var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var path = require('path');

module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home'));
	});

	app.get('/questions', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/questions'));
	});
};

