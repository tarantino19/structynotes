
const sumNumbersRecursive = (numbers) => {
  // todo
  // console.log('red')
  // Write a function sumNumbersRecursive that takes in an array of
  // numbers and returns the sum of all the numbers in the array.
  // All elements will be integers. Solve this recursively.
//find sub problems
//base case is zero
//take first element and add to recursive call of remaining elements
// n = array length
// always +1 functional call than number of elements
//array has to be sliced  - sliced size gets deeper
// /base case or ending is where we begin our if - when will the recursion stop?
// log final result outside of the function

if (numbers.length === 0){
  return 0
}

return numbers[0] + sumNumbersRecursive(numbers.slice(1))
//slice remove first element (0) then return only elements after that (1 as startswith)

};

//number of recursive calls for time complexity

const recur = sumNumbersRecursive([5, 2, 9, 10]); // -> 26
console.log(recur)


// Recursive Step: The recursive step is where the function calls itself with a modified input, moving closer to the base case. In your code:

// JavaScript

// return numbers[0] + sumNumbersRecursive(numbers.slice(1));
// It takes the first element (numbers[0]).

// It then calls sumNumbersRecursive again, but this time with a smaller array (numbers.slice(1)), which is the original array without its first element.

// Let's trace an example: sumNumbersRecursive([1, 2, 3])

// Call 1: sumNumbersRecursive([1, 2, 3])

// numbers.length is not 0.

// It returns 1 + sumNumbersRecursive([2, 3])

// Call 2: sumNumbersRecursive([2, 3])

// numbers.length is not 0.

n summary, a recursive function "loops" by:

Making repeated calls to itself.

Modifying its input in each call to move closer to the base case.

Having a clearly defined base case that stops the recursion and provides a known starting point for the return values to propagate back up the call stack.
