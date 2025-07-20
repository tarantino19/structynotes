const pairProduct = (numbers, targetProduct) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === targetProduct) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
};

module.exports = {
  pairProduct,
};
