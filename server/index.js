var express = require('express');
const bodyParser = require("body-parser");
var app = express();
var match = require("../server/app/fizzBuzzMatch");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Fizz Buzz Server is up..');
});
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
    var challenge = match.challengePlayer(req.body);
    console.log("Player " + req.body.id + " challenge is " + challenge);
    res.send(JSON.stringify({ "challenge": challenge }));
});
app.post("/answer", function (req, res) {
    var answer = req.body.answer;
    match.respond(req.body.player, answer);
    console.log("Answer " + req.body.player.id + " he or she answers " + answer);
    res.send();
});
app.listen(3000);
