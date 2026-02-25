const removeFromArray = function(arr, ...remove) {
    for (const i of remove) {
        arr = arr.filter(item => item !== i);
    };
    return arr;
};

//Solutions provided
const removeFromArray1 = function(array, ...args) {
  return array.filter(val => !args.includes(val));
};

//Second solution provided
const removeFromArray2 = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
        newArray.push(item);
        }
    });
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
