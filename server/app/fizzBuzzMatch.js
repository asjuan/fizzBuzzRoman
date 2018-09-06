"use strict";
var response = require("../app/response");
var fizzBuzEngine = require("../app/fizzBuzzEngine");
var isClosed = false, arr = [], counter = 0, currentPlayer,lastPlayer, validAnswer, hasLost;
module.exports = {
    "init": function () {
        counter = 1;
        arr = [];
        isClosed = false;
        currentPlayer = 1;
        lastPlayer = 1;
        validAnswer = "I";
        hasLost = false;
    },
    "joinMe": function () {
        var last;
        if (isClosed) return response.empty();
        last = response.newOne(arr.length + 1);
        arr.push(last);
        return last;
    },
    "closeregistration": function () {
        if (arr.length < 2) return;
        isClosed = true;
    },
    "challengePlayer": function (player) {
        var isValid, i, found;
        if (!isClosed) return undefined;
        isValid = arr.some(function (r) { return r.id === player.id && r.token === player.token && player.id === currentPlayer; });
        if (!isValid) return undefined;
        if (hasLost) {
            return "Player " + lastPlayer + " lost!";
        }
        return counter;
    },
    "respond": function (player, answer) {
        var isValid, i, next, found;
        if (!isClosed) return undefined;
        isValid = arr.some(function (r) { return r.id === player.id && r.token === player.token && player.id === currentPlayer; });
        if (!isValid) return undefined;
        i = 0;
        next = 1;
        while (!found) {
            i += 1;
            if (i >= arr.length) {
                i = 0;
            }
            found = arr[i].id === currentPlayer;
            if (found && i + 1 >= arr.length) next = 1;
            if (found && i + 1 < arr.length) next = arr[i].id + 1;
        }
        lastPlayer = arr[i].id;
        currentPlayer = next;
        hasLost = answer !== validAnswer;
        if (hasLost) return;
        counter += 1;
        validAnswer = fizzBuzEngine(counter);

    }
};