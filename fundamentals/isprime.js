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
