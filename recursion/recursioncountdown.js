//function that makes a call to itself
//
//
// func countdown (n):
//  if n = 0
// return
// print (n)
// countdown (n -1)
//
//

const countdown = (n) => {
  if (n == 0){
    return
  }
  console.log(n)
  countdown(n - 1)
}

countdown(8)



//make sure base case can handle recursive function
//
// //   if (n == 0){   <<< - base case
//   return
// }
// node:internal/util/inspect:1679
//
// countdown(5)
// function formatNumber(fn, number, numericSeparator) {
//                      ^

// RangeError: Maximum call stack size exceeded
//     at formatNumber (node:internal/util/inspect:1679:22)
//     at formatPrimitive (node:internal/util/inspect:1740:12)
//     at formatValue (node:internal/util/inspect:842:12)
//     at inspect (node:internal/util/inspect:404:10)
//     at formatWithOptionsInternal (node:internal/util/inspect:2402:40)
//     at formatWithOptions (node:internal/util/inspect:2264:10)
//     at console.value (node:internal/console/constructor:336:14)
//     at console.log (node:internal/console/constructor:384:61)
//     at countdown (/Users/tarantino/Desktop/structy/index.js:5:11)
//     at countdown (/Users/tarantino/Desktop/structy/index.js:6:3)
const countdown = (n) => {
  if (n == 0){
    return
  }
  console.log(n)
  countdown(n - 1)
  console.log(n)
}

//if we put console logs after recursive call it will be reverse

countdown(5)

// The console.log(n) before the recursive call prints the numbers in descending order (5, 4, 3, 2, 1) as the function calls are being made.

// The console.log(n) after the recursive call prints the numbers in ascending order (1, 2, 3, 4, 5) as the function calls are returning and unwinding from the call stack. Each function call "pauses" at the recursive call, and only continues to the second console.log once the deeper recursive calls have fully completed and returned. The deepest call (countdown(1)) is the first to complete its recursive part and therefore the first to execute its final console.log(n), which prints 1.
'
