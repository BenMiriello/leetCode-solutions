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

// SOLUTION

function maxSubArray(nums) {
  for (let n = 1; n < nums.length; n++){
    nums[n] = Math.max(nums[n], nums[n] + nums[n-1])
  }
  return Math.max(...nums)
};

// function maxSubArray(array){
//   if (array.length < 1) return null;
//   if (array.length === 1) return array[0];
//   let max = -Number.MAX_VALUE;
//   for (let start = 0; start < array.length; start++) {
//     for (let end = start; end <= array.length; end++) {
//       let subtotal = 0;
//       for (let i = start; i < end; i++) {
//         subtotal += array[i];
//       }
//       if (subtotal > max) max = subtotal;
//     }
//   }
//   return max;
// };

let test = (nums, desired) => {
  let result = maxSubArray(nums)
  console.log(`[ ${nums} ] //=> `, result, ' * ', result === desired)
}
test([-2,1,-3,4,-1,2,1,-5,4], 6)
test([1], 1)
test([-1,0,-2], 0)

