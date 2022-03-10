/* Sliding Window */

// Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0, if no such subarray exists.

const smallestSubArray = (array, s) => {
  // input: array of positive numbers and a positive number s
  // output: integer that represents thte length of smallest subarray sum equal to or greater than s

  // loop over the array and keep track of the sum
  // update the smallest array sum if it is length is smaller and sum is greater than or equal to s
  // return length

  // keep track of the length of smallest subarray
  // iterate over the input array
  // keep track of the sum
  // return smallest subarray length

  let smallestLength = array.length + 1;
  let subArraySum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    subArraySum += array[windowEnd];
    while (subArraySum >= s) {
      smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
      subArraySum -= array[windowStart];
      windowStart += 1;
    }
  }
  if (smallestLength === array.length + 1) {
    return 0;
  }
  return smallestLength;
}