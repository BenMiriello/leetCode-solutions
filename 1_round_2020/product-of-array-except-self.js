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

const productExceptSelf = nums => {
    let fromStart = 1
    const fromEnd = [1, nums[nums.length - 1]]
    for (let i = nums.length - 2; i > 0; i--) {
        fromEnd.push(fromEnd[fromEnd.length - 1] * nums[i])
    }
  
    // example: if nums = [1,2,3,4], fromEnd = [1,4,12,24] & fromStart = 1 => 1 => 2 => 6
    const result = Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        result[i] = fromStart * fromEnd.pop()
        fromStart *= nums[i]
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
  


// var productExceptSelf = function(nums) {
//     const fromEnd = [1, nums[nums.length - 1]]
//     for (let i = nums.length - 2; i > 0; i--) {
//       fromEnd.push(fromEnd[fromEnd.length - 1] * nums[i])
//     }
//     // example: nums = [1,2,3,4], fromStart = [6,2,1,1], fromEnd = [1,4,12,24]
//     const fromStart = [1, nums[0]]
//     for (let i = 1; i < nums.length - 1; i++) {
//       fromStart.push(fromStart[fromStart.length - 1] * nums[i])
//     }
//     fromStart.reverse()
  
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//       result.push(fromStart.pop() * fromEnd.pop())
//     }
  
//     return result
//   }

// ---------------------------------------------------

// const findLatter = (i, len, nums) => {
//   let latter = 1
//   for (i; i < len; i++) {
//     latter *= nums[i]
//   }
//   return latter
// }
    
// var productExceptSelf = function(nums) {
//     let latter = findLatter(1, nums.length, nums)
//     // for (let h = 1; h < nums.length; h++) {
//     //   latter *= nums[h]
//     // }

//     let products = []

//     if (latter === -0) {
//       products.push(0)
//     } else {
//       products.push(latter)
//     }

//     let former = nums[0]
//     let len = nums.length - 1
//     console.log(0, '|', '\\', latter)
//     for (let i = 1; i < len; i++) {
//       former *= nums[i - 1]
//       if (nums[i] === 0) {
//         latter = findLatter(i, len, nums)
//         console.log('found:', latter, i, len, nums)
//       } else {
//         latter /= nums[i]
//       }
//       let current = former * latter
//       if (current === -0) {
//         products.push(0)
//       } else {
//         products.push(current)
//       }
//       console.log(i, '|', former, latter)
//     }
//     console.log(nums.length - 2, '|', former * nums[nums.length - 2], '\\')
//     products.push(former * nums[nums.length - 2])

//     return products
// };

