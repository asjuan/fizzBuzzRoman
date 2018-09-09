const settings = require("../src/conf");
module.exports = function play() {
    var myRequest = new XMLHttpRequest();
    var myid = document.getElementById("myuserId");
    var mytoken = document.getElementById("mytoken")
    var challengeRequest = { "id": Number(myid.textContent), "token": mytoken.textContent };
    myRequest.open("POST", settings.webapihost + "/challenge");
    myRequest.overrideMimeType("application/json");
    myRequest.setRequestHeader("Content-Type", "application/json");
    myRequest.send(JSON.stringify(challengeRequest));
    myRequest.onload = function () {
        var challenge = document.getElementById("mychallenge");
        var obj;
        if (myRequest.response) {
            obj = JSON.parse(myRequest.response);
            challenge.textContent = obj.challenge;
            console.log(obj.challenge);
        }
        else {
           challenge.textContent = "try again"; 
        }
    };
}