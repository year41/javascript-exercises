const palindromes = function (str) {
    let cleanStr = str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '');

    //Suggested solution
    const reverStr = cleanStr
        .split('')
        .reverse()
        .join('');

    return cleanStr === reverStr;

    //My solution \/
    // for (let i = 0; i < cleanStr.length; i++) {
    //     if (cleanStr[i] != cleanStr[cleanStr.length - 1 - i]) {
    //         return false;
    //     };
    // };
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
