const isPrime = (n) => {
  // todo

  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

//should return true or false
//
// prime - divisible by 1 and itself
//
//
//
// The square root of a number is a value that, when multiplied by itself, gives the original number.

//added notes
//  n < 2 matically 1
//loop for prime - starts with 2 cause 1 matic true
//
const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

//starting loops
//
// It depends on what your loop is supposed to represent:

// i = 0 → when you’re iterating over an array or zero-based index.

// Example: for (let i = 0; i < arr.length; i++) { ... }

// Arrays in JS are 0-based, so you usually start at 0.

// i = 1 → when you’re iterating over a sequence of numbers starting at 1, like in your fizzBuzz example.
