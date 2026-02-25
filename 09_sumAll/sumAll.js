const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a <= 0 || 0 >= b) return 'ERROR';
    let sum = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        };
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        };
    };
    return sum
};

console.log(sumAll(2, 5));

// Do not edit below this line
module.exports = sumAll;
