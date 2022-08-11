const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  let total = numbers.reduce((total, number) => {
      return total + number;
  }, 0)

  return total;
};

const multiply = function(numbers) {
  let total = numbers.reduce((total,number)=> {return total * number}, 1)
  return total;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
	let total = 1;
  for(let i = number; i > 0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
