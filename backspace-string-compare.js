// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function(S, T) {

  const process = (str) => {
    let stack = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') stack.pop()
      else stack.push(str[i])
    }
    return stack.join('')
  }
  return process(S) === process(T)
};

// var backspaceCompare = function(S, T) {

//   S = S.split('')
//   T = T.split('')

//   function processDeletions(arr){
//     for (let i = 1; i < arr.length; i++) {
//       while (arr[0] === '#') arr.shift()
//       if (arr[i] === '#') {
//         arr.splice(i - 1, 2)
//         i -= 2
//       }
//     }
//   }

//   processDeletions(S)
//   processDeletions(T)

//   if (S.length !== T.length) return false

//   for (let i = 0; i < S.length; i++) {
//     if (S[i] !== T[i]) return false
//   }

//   return true
// };

let before = new Date().getTime()
console.log(backspaceCompare("a##c", "#a#c")) // true
console.log(backspaceCompare("ab##", "c#d#")) // true
console.log(backspaceCompare("a##c", "#a#c")) // true
console.log(backspaceCompare("a#c", "b")) // false
console.log(new Date().getTime() - before)


