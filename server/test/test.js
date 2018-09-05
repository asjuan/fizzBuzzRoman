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
            var response = match.joinMe();
            assert.equal(response.token !== undefined, true);
            assert.equal(response.id, 1);
        });
        it("should be able to register two and get last player", function () {
            var response = registerTwoGetLast(match);
            assert.equal(response.id, 2);
        });
        it("should be able to close register, so no token, no id", function () {
            var response;
            registerTwoGetLast(match);
            match.closeregistration();
            response = match.joinMe();
            assert.equal(response.token, undefined);
            assert.equal(response.id, undefined);
        });
    });
});
