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
    for (i = 0; i < nums.length; i++) {
        if (!numsObj[nums[i]]) {
            numsObj[nums[i]] = 1
        } else {
          numsObj[nums[i]] += 1
        }
    }
    let keys = Object.keys(numsObj)
    for (i = 0; i < keys.length; i++) {
        if (numsObj[keys[i]] === 1) {
            return parseInt(keys[i])
        }
    }
};

let res = singleNumber([2,2,1])
console.log(res, res === 1)
let res2 = singleNumber([17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6])
console.log(res2, res2 === 16)

// var singleNumber = function(nums) {
//     let once = nums[0]
//     console.log(once)
//     for (let i = 1; i < nums.length; i++) {
//         if (!once) {
//             once = nums[i]
//             console.log('i //=>', i, '!once //=>', once)
//         } else if (nums[i] === once) {
//             once = null
//             console.log('i //=>', i, '===nums[i] //=>', once)
//         }
//     }
//     return once
// };
