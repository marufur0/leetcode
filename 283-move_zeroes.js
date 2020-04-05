/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

function moveZeroes(nums) {
  // keep track of the current index that we want to replace, start with the first index of the list
  let nextIndexToReplace = 0;
  for (let i = 0; i < nums.length; i++) {
    // swap the values and increment the next index to replace
    if (nums[i] != 0) {
      let temp = nums[nextIndexToReplace];
      nums[nextIndexToReplace] = nums[i];
      nums[i] = temp;
      nextIndexToReplace++;
    }
  }
}

function moveZeroes(nums) {
  // this will keep track of the index that we need to replace a non zero element with
  // start with the first index of a list
  let nextIndexToReplace = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nextIndexToReplace] = nums[i];
      nextIndexToReplace++;
    }
  }

  // after all the non zeroes have been replace, we can continue to replace the rest of the list with zeroes
  for (let i = nextIndexToReplace; i < nums.length; i++) {
    nums[i] = 0;
  }
}


function moveZeroes(nums) {
  // keep track of the number of zeroes that we have
  // store all the non zero elements, in order
  let numOfZeroes = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      numOfZeroes++;
    } else {
      result.push(nums[i]);
    }
  }

  for (let i = 0; i < numOfZeroes; i++) {
    result.push(0);
  }

  // copy over the list to the original list
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
}