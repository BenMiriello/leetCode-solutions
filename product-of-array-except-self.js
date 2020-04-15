//   Product of Array Except Self

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    const fromEnd = [1, nums[nums.length - 1]]
    for (let i = nums.length - 2; i > 0; i--) {
      fromEnd.push(fromEnd[fromEnd.length - 1] * nums[i])
    }
    // example: nums = [1,2,3,4], fromStart = [6,2,1,1], fromEnd = [1,4,12,24]
    const fromStart = [1, nums[0]]
    for (let i = 1; i < nums.length - 1; i++) {
      fromStart.push(fromStart[fromStart.length - 1] * nums[i])
    }
    fromStart.reverse()
  
    const result = []
    for (let i = 0; i < nums.length; i++) {
      result.push(fromStart.pop() * fromEnd.pop())
    }
  
    return result
  }
  
  const test = (input, expected) => {
    console.log()
    console.log(input)
    let result = productExceptSelf(input)
    console.log(result.join('') == expected.join('') ? 'PASSED' : 'FAILED', '|', result)
  }
  
  test([1,2,3,4], [24,12,8,6])
  test([9,0,-2], [0,-18,0])
  
  