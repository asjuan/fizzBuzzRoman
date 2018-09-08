var express = require('express');
var app = express();
var match = require("../server/app/fizzBuzzMatch");
app.post('/init', function (req, res) {
    match.init();
    console.log("Reset match")
    res.send();
});
app.post('/close', function (req, res) {
    match.closeregistration();
    console.log("Ready to play");
    res.send();
});
app.post('/add', function (req, res) {
    var playerInfo = match.joinMe();
    console.log("Adding player " + playerInfo.id);
    res.send(playerInfo);
});
app.post("/challenge", function (req, res) {
    debugger;
    var challenge = match.challengePlayer(req.body);
    console.log("Player " + req.body.id + " challenge is " + challenge);
    res.send(challenge);
});
app.post("/answer", function (req, res) {
    debugger;
    var answer = req.body.answer;
    match.respond(req.body.player, answer);
    console.log("Answer " + req.body.player.id + " answers " + answer);
    res.send(challenge);
});
app.listen(3000);