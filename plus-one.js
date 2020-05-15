// Plus One

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    let idx = digits.length - 1;
    
    const carry = (i) => {
        if (digits[i] < 9) {
            digits[i] += 1;
            return 1;
        } else {
            digits[i] = 0
        }
        idx -= 1;
    }

    while (digits[idx] !== undefined) {
      let res = carry(idx);
      if (res) break;
    }
    
    if (digits[0] === 0 && (!digits[1] || digits[1] === 0)) {
        digits.unshift(1);
    }
    
    return digits;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([9]));
console.log(plusOne([9,9]));
console.log(plusOne([8,9,9,9]));
console.log(plusOne([0]));