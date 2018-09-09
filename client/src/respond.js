const settings = require("../src/conf");
module.exports = function respond() {
    var myRequest = new XMLHttpRequest();
    var myid = document.getElementById("myuserId");
    var mytoken = document.getElementById("mytoken");
    var myanswer = document.getElementById("myanswer");
    var player = { "id": Number(myid.textContent), "token": mytoken.textContent };
    var res = { "player": player, "answer": myanswer.value };
    myRequest.open("POST", settings.webapihost + "/answer");
    myRequest.overrideMimeType("application/json");
    myRequest.setRequestHeader("Content-Type", "application/json");
    myRequest.send(JSON.stringify(res));
    myRequest.onload = function () {
    };
}