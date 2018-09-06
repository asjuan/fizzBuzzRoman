var arabicRomanConvertJs = require("arabic-roman-convert.js");

module.exports = function engine(number) {
    return arabicRomanConvertJs.toRoman(number);
};