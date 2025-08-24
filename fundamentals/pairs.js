//for pairs from 1 array - assume double
//
//
const pairs = (elements) => {
  // todo
  const allPairs = []

  for (let i = 0; i < elements.length; i++){
    for (let j = i + 1; j < elements.length; j++){
       allPairs.push([elements[i], elements[j]])
    }
  }
  return allPairs
};

module.exports = {
  pairs,
};
