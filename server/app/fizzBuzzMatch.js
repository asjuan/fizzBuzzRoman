var response = require("../app/response");
var isClosed = false, arr = [];
module.exports = {
    "init": function () {
        arr = [];
        isClosed = false;
    },
    "joinMe": function () {
        var last;
        if (isClosed) return response.empty();
        last = response.newOne(arr.length + 1);
        arr.push(last);
        return last;
    },
    "closeregistration": function () {
        isClosed = true;
    }
};