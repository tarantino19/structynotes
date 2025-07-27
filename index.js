// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

const sumOfLengths = (strings) => {

  //shrink problem size
  // base case is zero
  //
  if (strings.length === 0){
    return 0
  }

  //we use .length to get length of 1st string
  const allStrings = (strings[0].length + sumOfLengths(strings.slice(1)))
  return allStrings

  // my first try, wont work
  // const allStrings = (strings[0] + sumOfLengths(strings.slice(1)))
  // return allStrings.length (I added letters to numbers)
//when in doubt, console log - ondividual properties im using
}



const sum1 = sumOfLengths(["goat", "cat", "purple"]); // -> 13
console.log(sum1)
