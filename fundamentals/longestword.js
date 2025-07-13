const longestWord = (sentence) => {
  let longestword = "";
  let splittedWords = sentence.split(" ");

  for (let word of splittedWords) {
    if (word.length >= longestword.length) {
      longestword = word;
    }
  }

  return longestword;
};

longestWord("Hello world Omayowamoshinderu");
