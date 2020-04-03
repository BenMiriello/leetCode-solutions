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

// SOLUTION (incomplete)

var maxSubArray = function(nums) {
  let maxSum = null
  for (let i = 0; i < nums.length; i++){
      let subSum = 0
      let containsNumber = false
      let subLength = 4
      // instead of subLength being hard coded to 4 which was a mistake,
      // need to iterate through all potential lengths starting from point i
      // make another for loop around the j for loop
      for (let j = i; j < i + subLength; j++) {
          if (typeof nums[j] === 'number'){
              containsNumber = true
              subSum += nums[j]
          }
      }
      if (containsNumber) {
          if (maxSum) {
              if (subSum > maxSum){
                  maxSum = subSum
              }
          } else {
              maxSum = subSum
          }
      } 
  }
  return maxSum
};