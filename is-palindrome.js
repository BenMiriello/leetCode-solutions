// ignores all non-alphanumeric characters
// considers numbers valid

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    return s === s.split('').reverse().join('')
};