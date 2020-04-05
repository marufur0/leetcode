/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

function findUnsortedSubarray(nums) {
  // copy the original array, sort the array
  let copyOfNums = nums.slice().sort((a, b) => a - b);
  
  // compare each element, keep track of the start and end of mismatched elements
  // that is the boundary (subarray) that needs to be sorted
  let start = nums.length;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != copyOfNums[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  // if nothing needed to be sorted, return 0
  // otherwise, the difference of the boundaries + 1 is the answer
  return end - start >= 0 ? end - start + 1 : 0;
}