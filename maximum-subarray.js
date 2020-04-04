/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// SOLUTION (cubic)

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    for (let outerIdx = 0; outerIdx < nums.length; outerIdx++){
        let subSum = 0
        for (let innerIdx = outerIdx; innerIdx < nums.length; innerIdx++) {
            subSum += nums[innerIdx]
            maxSum = Math.max(subSum, maxSum)
        }
    }
    return maxSum
};

let test = (nums, desired) => {
  let result = maxSubArray(nums)
  console.log(`[ ${nums} ] //=> `, result, ' * ', result === desired)
}
test([-2,1,-3,4,-1,2,1,-5,4], 6)
test([1], 1)
test([-1,0,-2], 0)

