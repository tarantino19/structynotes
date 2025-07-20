const anagrams = (s1, s2) => {
  // Edge case: If lengths are different, they can't be anagrams.
  // This is a quick and efficient initial check.
  if (s1.length !== s2.length) {
    return false;
  }

  // Create two separate frequency maps (objects)
  const charCount1 = {};
  const charCount2 = {};

  // First loop: Populate charCount1 for string s1
  // This loop iterates through each character of the first string.
  // For each character, it increments its count in charCount1.
  for (let char of s1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  //this is how you populate an object

  // Second loop: Populate charCount2 for string s2
  // This loop does the same for the second string, populating charCount2.
  for (let char of s2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // 3. Iterate through the keys of one map (e.g., charCount1)
  //    and compare the counts for each character in both maps.
  //    Since we already checked that the lengths of keys are the same,
  //    and the total string lengths are the same, if all characters
  //    and their counts match from charCount1 to charCount2, then they are anagrams.
  for (let char in charCount1) {
    // Check if the character exists in charCount2 AND its count is identical
    if (charCount1[char] !== charCount2[char]) {
      return false; // If counts don't match, not an anagram
    }
  }

  // If all checks pass, the strings are anagrams.
  return true;
};

module.exports = {
  anagrams,
};
