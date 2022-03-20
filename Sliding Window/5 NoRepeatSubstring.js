/* Sliding Window */

// Given a string, find the length of the longest substring which has no repeating characters

const NoRepeatSubstring = (string) => {
  // input: string
  // output: integer that represents length of substring

  // iterate over the input string
  // keep track of distinct characters
  // keep track of length
  // return the longest substring length

  let maxLength = 0;
  let distinctChars = {};
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < string.length; windowEnd++) {
    if (distinctChars[string[windowEnd]] === undefined) {
      distinctChars[string[windowEnd]] = windowEnd;
    } else if (distinctChars[string[windowEnd]]) && string[windowEnd] === string[windowEnd - 1]) {
      distinctChars = {};
      distinctChars[string[windowEnd]] = windowEnd;
      windowStart = windowEnd;
    } else {

    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}