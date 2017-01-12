var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friend = require("../data/friend.js");


module.exports = function(app) {
app.get("/api/friend", function (req, res) {
  res.json(friend);
 });

app.post("/api/friend", function(req, res) {
    res.json(friend);
});
}