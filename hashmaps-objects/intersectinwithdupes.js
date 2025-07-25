const intersectionWithDupes = (a, b) => {
  const intersectedLetters = [];

  const objectOne = {};
  const objectTwo = {};

  for (let char of a) {
    objectOne[char] = (objectOne[char] || 0) + 1;
  }

  for (let char of b) {
    objectTwo[char] = (objectTwo[char] || 0) + 1;
  }

  //looping tru an object? use for in looops
  // Iterate through the keys in objectOne (characters in array a)
  for (let char in objectOne) {
    // Check if the character also exists in objectTwo (array b)
    if (objectTwo[char]) { //if char is true (exist in the object)
      // Determine the minimum frequency of the character in both arrays
      const minFrequency = Math.min(objectOne[char], objectTwo[char]);

      // Add the character to the intersectedLetters array the appropriate number of times
      for (let i = 0; i < minFrequency; i++) {
        intersectedLetters.push(char);
      }
    }
  }

  return intersectedLetters;
};

module.exports = {
  intersectionWithDupes,
};

//   if (objectTwo[char]) - if true, or use hasOwnProperty(char)

//returns NEW array including dups that appears in the arrays

//use a counter hashmap
//convert into 2 separate hasmaps
//iterate over 1 hasmap

//choose min value of the value hasmap - cause as many num that is COMMON, so choose minimum
