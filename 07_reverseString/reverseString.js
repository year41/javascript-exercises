const reverseString = function(str) {
    let reverseStr = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr
};

const reverseString2 = function (str) {
  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
