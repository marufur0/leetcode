/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Given nums = [-3,4,3,90], target = 0,
return [0,2]

Given nums = [3, 3], target = 6,
return [0, 1]
*/

function twoSum(nums, target) {
    // use space to increase speed
    // set key as the value of the number in the list
    // set value as the index of that number in the list
    let mapOfNumIdx = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (mapOfNumIdx[difference] != undefined) {
            return [ mapOfNumIdx[difference], i ];
        }

        mapOfNumIdx[nums[i]] = i;
    }
}

function twoSum(nums, target) {
    // use space to increase speed
    // set key as the value of the number in the list
    // set value as the index of that number in the list
    let mapOfNumIdx = {};
    for (let i = 0; i < nums.length; i++) {
        mapOfNumIdx[nums[i]] = i;
    }

    // iterate through and now check if the difference of the current number and the target exists in the map as a key
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        // make sure that we are not using the same indexed element
        if (mapOfNumIdx[difference] != undefined && i != mapOfNumIdx[difference]) {
            return [ i, mapOfNumIdx[difference] ];
        }
    }
}

function twoSum(nums, target) {
    // brute force: iterate through the list, check each element with every other element to check if they add up to the target
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}
