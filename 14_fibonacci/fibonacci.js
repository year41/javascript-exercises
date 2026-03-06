const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    let first = 1;
    let next = 0;

    for (let i = 2; i <= num; i++) {
        let current = first + next;
        next = first;
        first = current;
    };
    return first;

    //Solution suggestion.
    // const fib = [0, 1];
    // for (let i = 2; i <= num; i++) {
    //     fib[i] = fib[i - 1] + fib[i - 2];
    // }
    // return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
