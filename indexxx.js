function fizzBuzz(numbers) {
  let result = [];
  for (number of numbers) {
    if (number % 5 === 0 && number % 3 === 0) {
      result.push('fizzbuzz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(number);
    }
  }
  return result.join(', ');
}

function count(nums) {
  let result = 0;
  for (num of nums) {
    result += num;
  }
  return result;
}

module.exports = {
  fizzBuzz,
  count,
}