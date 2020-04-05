/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums) {
  let elementFrequencyMap = {};
  let majorityElementLen = Math.ceil(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (elementFrequencyMap[nums[i]] != undefined) {
      elementFrequencyMap[nums[i]]++;
    } else {
      elementFrequencyMap[nums[i]] = 1;
    }
  }

  for (key in elementFrequencyMap) {
    if (elementFrequencyMap[key] >= majorityElementLen) {
      return key;
    }
  }
}

function majorityElement(nums) {
  let count = 0;
  let potentialMajorityElement = nums[i];

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      potentialMajorityElement = nums[i];
    }

    count += potentialMajorityElement == nums[i] ? 1 : -1;
  }

  return potentialMajorityElement;
}