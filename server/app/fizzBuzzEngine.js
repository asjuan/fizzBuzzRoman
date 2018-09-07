var romanNumber = require("roman-number");
module.exports = function engine(number) {
    var fizzAnswer = number % 3 ? "" : "fizz";
    var buzzAnswer = number % 5 ? "" : "buzz";
    var fizzBuzzAnswer = fizzAnswer + buzzAnswer;
    if (fizzBuzzAnswer) {
        return fizzBuzzAnswer;
    }
    return romanNumber(number).toString();
};