/* Sliding Window */

// Give an array of string letters representing a fruit
// return the max length of contiguous subarray with maximum 2 distint characters

const fruitsIntoBaskets = (array) => {
  // input: array of strings/characters
  // output: integer representing maximum length of contiguous substring

  // iterate over the input array
  // keep track of maximum length
  // keep track of distinct characters
  // return the maximum length

  let maxLength = 0;
  let distinctChars = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    if (!distinctChars[array[windowEnd]]) {
      distinctChars[array[windowEnd]] = 1;
    } else {
      distinctChars[array[windowEnd]]++;
    }
    // if > 2 subtract and delete
    // if =< 2 find length
    while (Object.keys(distinctChars).length > 2) {
      if (distinctChars[array[windowStart]] === 1) {
        delete distinctChars[array[windowStart]];
      } else {
        distinctChars[array[windowStart]]--;
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}