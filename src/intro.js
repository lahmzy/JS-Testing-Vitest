// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function caluclateAverage(arr) {
  if (arr.length === 0) return NaN;

  const sum = arr.reduce((acc, current) => acc + current, 0);

  return sum / arr.length;
}

export function factorial(number){

  if (number === 0 || number === 1) return 1;

  const productArray = [];
  
  for (let i = number; i > 1; i--) {
    productArray.push(i);
  }

  return productArray.reduce((acc, current) => acc * current, 1);
}