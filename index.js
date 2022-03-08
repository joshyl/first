/* Sliding Window */

// given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'.

const maxSumSubarray = (array, k) => {
  // input: array of positive integers, a positive number k
  // output: integer

  // go through each number in the array
  // find the maximum sum of contiguous k numbers

  // iterate over input array until reaching k
  // find the some of the first k
  // continue to find the sum of the next contiguous set of k numbers
  // keep track of the maxmimum sum and return it

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += array[i];
  }

  for (let i = 0; i < array.length - k + 1; i++) {
    maxSum = Math.max(maxSum, maxSum + array[i] - array[i + k]);
  }

  return maxSum;
}

const maxSubArrayOfSizeK = (k, array) => {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
}