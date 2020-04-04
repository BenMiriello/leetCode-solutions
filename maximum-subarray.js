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

// Outer array  =>    [n,n,n,n,n]
// Outer Idx    =>       ^
// SubsetLength => up to ^ ^ ^ ^
// Inner Idx    => from  ^  to ^

var maxSubArray = function(nums) {
    // console.log('\n\nARRAY: ', nums)
    // maxsum is null just in case there are no numbers.
    // Also, starting at 0 could bias outcome since some arrays could be all negative numbers.
    let maxSum = null
    // perform a series of checks starting from each index of the given array
    for (let outerIdx = 0; outerIdx < nums.length; outerIdx++){
        // console.log('outerIdx => ', outerIdx)
        // from each index, compare an array of varying lengths from 1 to max
        for (let subsetLength = 1; subsetLength < nums.length - outerIdx + 1; subsetLength++){
            // console.log('. subsetLength => ', subsetLength)
            let subSum = 0
            let containsNumber = false
            // add each up for a given subset
            for (let innerIdx = outerIdx; innerIdx < outerIdx + subsetLength; innerIdx++) {
                // console.log('......... innerIdx => ', innerIdx)
                if (typeof nums[innerIdx] === 'number'){
                    containsNumber = true
                    subSum += nums[innerIdx]
                }
            }
            // console.log('* ............. maxSum => ', maxSum)
            // console.log('* ............. subSum => ', subSum)
            if (containsNumber) {
                // console.log('!!maxSum => ', !!maxSum)
                if (typeof maxSum === 'number') {
                    // set new maxSum if greater
                    // console.log('subSum > maxSum => ', subSum > maxSum)
                    if (subSum > maxSum){
                        // console.log('* ............. subSum > maxSum => ', subSum, '>', maxSum)
                        maxSum = subSum
                    }
                // case fires only for first subset that contains a number
                } else {
                    maxSum = subSum
                }
            } 
            // console.log('* ............. maxSum => ', maxSum)
        }   
    }
    // console.log('nums.length => ', nums.length)
    return maxSum
};

let test = (nums, desired) => {
  let result = maxSubArray(nums)
  console.log(`[ ${nums} ] //=> `, result, ' * ', result === desired)
}
test([-2,1,-3,4,-1,2,1,-5,4], 6)
test([1], 1)
test([-1,0,-2], 0)

