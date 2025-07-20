const intersection = (a, b) => {
  //if i need to turn arrays into flat arrays, that doesnt duplicate i can use sets
  //i can use HAS property and push for pushing result to a new array

  // const setA = new Set(a);
  // const setB = new Set(b);

  // const result = [];

  // for (let number of setA) {
  //   if (setB.has(number)) {
  //     result.push(number);
  //   }
  // }

  // return result;

  //includes

  const result = [];

  for (let num of a) {
    if (b.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

module.exports = {
  intersection,
};
