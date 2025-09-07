//how to find the base case? - find smallest
//  The base case is the point at which this goal is fulfilled for the simplest input.
// find sub problems - > shrink problem size - [many] -> [empty array return 0]
// base case is smallest sub problem
//add function notation like   sum([arrays heres]), sum([empty array here])
//e.g. grab first array - add remaining
//
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0){
      return 0
  }
  return numbers[0] + sumNumbersRecursive(numbers.slice(1))
};

//each slice gets a new array - and then numbers[0] gets the first property of that new array


//the slice is the key here
//
// but why does the numbers[0] changes after every recursion when were not doing a loop


// That's an excellent question that gets to the heart of how recursion works without a traditional loop.

// The reason numbers[0] "changes" is because each recursive call creates a new, independent execution context with its own set of arguments. When you call sumNumbersRecursive(numbers.slice(1)), you aren't modifying the original numbers array. Instead, you're passing a new array to the next function call.

// Let's break down the process step by step:

// Initial Call: sumNumbersRecursive([1, 2, 3, 4])

// This function call has its own copy of the numbers array: [1, 2, 3, 4].

// It takes numbers[0], which is 1.

// It then calls the next instance of the function, passing a new array created by slice(1), which results in [2, 3, 4].

// Next Call: sumNumbersRecursive([2, 3, 4])

// This is a completely separate function call. It has its own, new numbers array: [2, 3, 4].

// It takes its own numbers[0], which is now 2.

// It calls the next instance with [3, 4].

// And so on...

// Each successive call receives a new, shorter array, and thus, its numbers[0] is a different element from the original array.

// Think of it like a relay race. . The first runner (function call) takes the baton (the array) and runs a short distance. Instead of running the whole race, they hand a new, shorter baton (the sliced array) to the next runner. Each runner is a separate instance, and the element they grab from their baton is the "first element" for their leg of the race. The race only finishes when the last runner gets an empty baton (the base case).
