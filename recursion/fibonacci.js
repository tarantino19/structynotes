const fibonacci = (n) => {
  // todo
  //
  // zero and 1 as base case
  // fibo  n = fibo n - 1 + fibo n-2

  // if (n === 1){
  //   return 1
  // }

  // if (n < 1){
  //   return 0
  // }

  //or
    if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
  //fibo - each number is sum of previous 2, using recursive - 1 - 2
  // F(n - 1) means “the Fibonacci number right before F(n)”
  // - F(n - 2) means “the Fibonacci number two positions before F(n)”

};

const fibo = fibonacci(3); // -> 2
console.log(fibo)


// Iterative (bottom-up)
const fibonacciIter = (n) => {
  if (n === 0 || n === 1) return n;
  let prev2 = 0; // F(0)
  let prev1 = 1; // F(1)
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2; // F(i) = F(i-1) + F(i-2)
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

// Example
console.log(fibonacciIter(3));  // -> 2
console.log(fibonacciIter(50)); // -> 12586269025
