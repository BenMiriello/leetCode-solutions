// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// SOLUTION:

var singleNumber = function(nums) {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!numsObj[nums[i]]) {
            numsObj[nums[i]] = 1
        } else {
          numsObj[nums[i]] += 1
        }
    }
    let keys = Object.keys(numsObj)
    for (let i = 0; i < keys.length; i++) {
        if (numsObj[keys[i]] === 1) {
            return parseInt(keys[i])
        }
    }
};
