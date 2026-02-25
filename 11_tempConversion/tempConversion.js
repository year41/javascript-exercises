function rounDec(num) {
  return Math.round(num *10) / 10;
}

const convertToCelsius = function(farTemp) {
  return rounDec((farTemp -32) * (5 / 9));
};

const convertToFahrenheit = function(cenTemp) {
  return rounDec((cenTemp * (9 / 5)) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
