const settings = require("../src/conf");
const mainplay = require("../src/play");
const respond2Me = require("../src/respond");
(function () {
    function joinMe() {
        var myRequest = new XMLHttpRequest();
        myRequest.open("POST", settings.webapihost +  "/add");
        myRequest.overrideMimeType("application/json");
        myRequest.send();
        myRequest.onload = function () {
            var myid = document.getElementById("myuserId");
            var mytoken= document.getElementById("mytoken");
            var obj = JSON.parse(myRequest.response);
            myid.textContent  = obj.id;
            mytoken.textContent = obj.token; 
            console.log(myRequest.response);
        };
    }
    var myplay, myres, reg = document.getElementById("register");
    reg.addEventListener("click", joinMe, false);
    myplay = document.getElementById("play");
    myplay.addEventListener("click", mainplay, false);
    myres = document.getElementById("myresponse");
    myres.addEventListener("click", respond2Me, false);
}());