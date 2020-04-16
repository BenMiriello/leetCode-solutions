// Valid Parenthesis String

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True

// Example 2:
// Input: "(*)"
// Output: True

// Example 3:
// Input: "(*))"
// Output: True

// Note:
// The string size will be in the range [1, 100].

/**
 * @param {string} s
 * @return {boolean}
 */

let checkValidString = s => {
    let check = (i = 0, open = 0) => {
        if (i == s.length)
            return open == 0;
        if (open < 0)
            return false;
        if (s[i] == '(') return check(i + 1, open + 1);
        if (s[i] == ')') return check(i + 1, open - 1);
        return check(i + 1, open - 1) || check(i + 1, open + 1) || check(i + 1, open); // '*' --> '(' || ')' || ''
    };
    return check();
};

console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"))
console.log(checkValidString("(())"))
console.log(checkValidString("(()*"))

// "(())((())()()(*)(*()(())())())()()((()())((()))(*"
// "--++---++-+-+-*+-*-+--++-++-++-+-+---+-++---+++-*"
//  12101232121212-12-323432321210101012323212343212-10 => 0 === 0 // wrong though
//                1  2                              321


// const checkValidString = string => {
//   let counter = 0
//   let stars = 0
//   for (let s of string) {
//     if (s === '(') {
//       counter--
//       // console.log(s, '-', counter, stars)
//     } else if (s === ')') {
//       if (counter < 0) {
//         counter++
//         // console.log(s, '+', counter, stars)
//       } else if (stars > 0) {
//         stars--
//       } else {
//         return false
//       }
//     } else { // (if s === '*')
//       stars++
//       // console.log(s, ' ', counter, stars, '+*')
//     }
//   }
//   return counter === 0
// }