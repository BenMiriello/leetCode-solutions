// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// SOLUTION

const numArr = (num) => {
    const arr = num.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr
}

const squareEachDigit = (num) => {
    const numberArray = numArr(num)
    let squaredByDigit = 0
    for (let n of numberArray) {
        squaredByDigit += n*n
    }
    return squaredByDigit
}

const isHappy = function(n) {
    let squaredByDigit = squareEachDigit(n)
    let counter = 0
    while (squaredByDigit != 1) {
        squaredByDigit = squareEachDigit(squaredByDigit)
        counter++
        if (counter >= 100) return false
    }
    return squaredByDigit === 1
};

console.log('isHappy(19) //=>', isHappy(19))
console.log('isHappy(22) //=>', isHappy(22))


// var isHappy = function(n) {
//     var seen = {};
    
//     seen[n] = true;

//     while (true) {
//         n = n.toString()
//             .split('')
//             .map(digit => { return parseInt(digit, 10); })
//             .reduce((total, digit) => { return total + digit * digit; }, 0);

//         if (n === 1) {
//             return true;
//         } else if (seen[n]) {
//             return false;
//         } else {
//             seen[n] = true;
//         }
//     }
// };