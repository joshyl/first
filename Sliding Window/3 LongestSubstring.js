/* Sliding Window */

// Given a string, find the length of the longest substring in it with no more than K distinct characters

const longestSubstringWithKDistinct = (string, k) => {
  // iterate over the input string
  // keep track of how many distinct characters during each iteration
  // keep track of length of longest substring
  // return longest substring

  let longestSubstring = 0;
  let windowStart = 0;
  let distinctChars = 0;
  let distinctCharsStorage = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    if (!distinctCharsStorage[string[windowEnd]]) {
      distinctCharsStorage[string[windowEnd]] = 1;
      distinctChars++;
    } else {
      distinctCharsStorage[string[windowEnd]]++;
    }

    while (distinctChars > k) {
      if (distinctCharsStorage[string[windowStart]] === 1) {
        delete distinctCharsStorage[string[windowStart]]
        distinctChars--;
      } else {
        distinctCharsStorage[string[windowStart]]--;
      }
      windowStart++;
    }
    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  } return longestSubstring;
}