var anid = require("shortid");
module.exports = {
    "newOne": function (id) {
        return {
            "id": id,
            "token": anid.generate()
        };
    },
    "empty": function () {
        return {
            "id": undefined,
            "token": undefined
        };
    }
};