"use strict";
var assert = require("assert");
var match = require("../app/fizzBuzzMatch");
function registerTwoGetLast(m) {
    m.init();
    m.joinMe();
    return m.joinMe();
}
describe("a match", function () {
    describe("joining to one", function () {
        it("should get me token nunber once joined", function () {
            var player = match.joinMe();
            assert.equal(player.token !== undefined, true);
            assert.equal(player.id, 1);
        });
        it("should be able to register two and get last player", function () {
            var player = registerTwoGetLast(match);
            assert.equal(player.id, 2);
        });
        it("should be able to close register, so no token, no id", function () {
            var player;
            registerTwoGetLast(match);
            match.closeregistration();
            player = match.joinMe();
            assert.equal(player.token, undefined);
            assert.equal(player.id, undefined);
        });
        it("ignores close registration if there is only one player", function () {
            var player;
            match.init();
            match.joinMe();
            match.closeregistration();
            player = match.joinMe();
            assert.equal(player.id, 2);
        });
    });
    describe("a game", function () {
        it("should fail to play if registration is not closed", function () {
            var player, challenge;
            match.init();
            player = match.joinMe();
            challenge = match.challengePlayer(player);
            assert.equal(challenge, undefined);
        });
        it("should detect fake player 1", function () {
            var challenge;
            match.init();
            match.joinMe();
            match.joinMe();
            match.closeregistration();
            challenge = match.challengePlayer({ id: 1, token: "fake token" });
            assert.equal(challenge, undefined);
        });
        it("should get fist challenge for player 1", function () {
            var player, challenge;
            match.init();
            player = match.joinMe();
            match.joinMe();
            match.closeregistration();
            match.challengePlayer(player);
            challenge = match.challengePlayer(player);
            assert.equal(challenge, 1);
        });
        it("gets second challenge only if player is ok", function () {
            var player1, player2, challenge;
            match.init();
            player1 = match.joinMe();
            player2 = match.joinMe();
            match.closeregistration();
            match.challengePlayer(player1);
            match.respond(player1, "I");
            challenge = match.challengePlayer(player2);
            assert.equal(challenge, 2);
        });
        it("gets second challenge only for player 2", function () {
            var player1, challenge;
            match.init();
            player1 = match.joinMe();
            match.joinMe();
            match.closeregistration();
            match.challengePlayer(player1);
            match.respond(player1, "I");
            challenge = match.challengePlayer(player1);
            assert.equal(challenge, undefined);
        });
        it("player 2 sees that player 1 lost", function () {
            var player1, player2, challenge;
            match.init();
            player1 = match.joinMe();
            player2 = match.joinMe();
            match.closeregistration();
            match.challengePlayer(player1);
            match.respond(player1, "?");
            challenge = match.challengePlayer(player2);
            assert.equal(match.readStatus().challenge, 1);
            assert.equal(match.readStatus().answer, "?");
            assert.equal(challenge, "Player 1 lost!");
        });
        it("player 1 sees next challenge", function () {
            var player1, player2, challenge;
            match.init();
            player1 = match.joinMe();
            player2 = match.joinMe();
            match.closeregistration();
            match.challengePlayer(player1);
            match.respond(player1, "I");
            match.challengePlayer(player2);
            match.respond(player2, "II");
            challenge = match.challengePlayer(player1);
            assert.equal(challenge, "3");
        });
        it("player 1 responds 3 but must be fizz", function () {
            var player1, player2, challenge;
            match.init();
            player1 = match.joinMe();
            player2 = match.joinMe();
            match.closeregistration();
            match.challengePlayer(player1);
            match.respond(player1, "I");
            match.challengePlayer(player2);
            match.respond(player2, "II");
            match.respond(player1, "III");
            challenge = match.challengePlayer(player2);
            assert.equal(challenge, "Player 1 lost!");
        });
    });
});
