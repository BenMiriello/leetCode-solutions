//   Perform String Shifts

// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

 

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 

// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

// [direction, amount]
var stringShift = function(s, shift) {
  let finalAmt = 0

  for (let instruction of shift) {
    if (instruction[0] === 0) {
      finalAmt -= instruction[1]
    } else {
      finalAmt += instruction[1]
    }
  }

  if (finalAmt === 0) {
    return s
  }
  finalAmt = finalAmt % s.length
  s = s.split('')

  if (finalAmt > 0) {
    for (let i = 0; i < finalAmt; i++) {
      s.unshift(s.pop())
    }
  } else {
    for (let i = 0; i < -finalAmt; i++) {
      s.push(s.shift())
    }
  }

  return s.join('')
};



const test = (s, shift, desired) => {
  console.log()
  console.log(s)
  const output = stringShift(s, shift)
  console.log(output === desired ? "PASSED" : "FAILED", '|', output)
}

test('abc', [[0,1],[1,2]], 'cab')

test('abcdefg', [[1,1],[1,1],[0,2],[1,3]], 'efgabcd')

test('abc', [[1,1],[1,1],[0,2],[1,3],[1,7]], 'cab')

test("wpdhhcj", [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]], "hcjwpdh")
