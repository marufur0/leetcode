/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function maxSubArray(nums) {
  // keep track of the previous max sum as we iterate through
  // we will have two checks, one for the "local" sum we are keeping track of, then the "global" sum we will return at the end of our iteration
  // for local sum, we check if the all the values previously added up is bigger than the current value we are on (we would just reassign if that was the case and start over)
  // after we have the new prevMaxSum of the values we've seen (or we reset to the current value we are on)
  // check with the global sum on which one is bigger between that and the prevMaxSum
  let prevMaxSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prevMaxSum = Math.max(prevMaxSum + nums[i], nums[i]);
    maxSum = Math.max(prevMaxSum, maxSum);
  }

  return maxSum;
}

function maxSubArray(nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let runningSum = nums[i];
    // check against the element itself to see if this is the max sum
    maxSum = Math.max(maxSum, runningSum);
    for (let j = i + 1; j < nums.length; j++) {
      runningSum = runningSum + nums[j];
      maxSum = Math.max(maxSum, runningSum);
    }
  }
  
  return maxSum;
}