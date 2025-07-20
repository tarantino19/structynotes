const mostFrequentChar = (s) => {
  const chars = {};

  for (let letter of s) {
    chars[letter] = (chars[letter] || 0) + 1;
  }

  const maxCount = Math.max(...Object.values(chars));

  for (let char of s) {
    if (chars[char] === maxCount) {
      return char; // return immediately when first match is found
    }
  }
};
//return the most frequent letter in that string

module.exports = {
  mostFrequentChar,
};
