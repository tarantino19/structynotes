// all unique
// Write a function, allUnique, that takes in an array.
//  The function should return a boolean indicating whether or not the array contains unique items.
//
//

const allUnique = (items) => {
  const setA = new Set(items)
  return setA.size === items.length
};


// const allUnique = (items) => {

//   const setA = new Set(items)

//   console.log('items', items.length)
//   console.log('setA', setA.size)

//   if (items.length === setA.size){
//     return true
//   }

//   return false

// };
//


//use size for sets/
// length for arrays

//return - need a boolean whether all elements in the array are allUnique
//convert input into a set
//then check size compared to the other

const a = allUnique(["q", "r", "s", "a"]); // -> true
const b = allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// console.log(a, b)
