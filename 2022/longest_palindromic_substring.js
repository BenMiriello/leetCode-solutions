const longestPalindrome = (s) => {
  const a = s.split('');
  let longest = [a[0]];
  let current = [];
  for (let i = 0; i < a.length; i += 1) {
    for (let j = i + 1; j <= a.length; j += 1) {
      current = a.slice(i, j);
      if (isPalindrome(current)) {
        if (current.length > longest.length) {
          longest = current;
        }
      }
    }
  }
  return longest.join('');
};

const isPalindrome = (a) => a.join('') === a.reverse().join('');

const tests = [
  {
    input: ['babad'],
    expected: 'bab'
  },
  {
    input: ['cbbd'],
    expected: 'bb'
  },
  {
    input: ['bb'],
    expected: 'bb'
  },

]

module.exports = {
  name: 'longest_palindromic_substring',
  method: longestPalindrome,
  tests
};
