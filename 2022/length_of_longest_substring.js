/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s) => {
  const arr = s.split('');
  let tmp = [];
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    while (tmp.indexOf(arr[i]) >= 0) tmp.shift();
    tmp.push(arr[i]);
    max = tmp.length > max ? tmp.length : max;
  }
  return max;
};

const tests = [
  {
    input: ['abcabcbb'],
    expected: 3
  },
  {
    input: ['bbbbb'],
    expected: 1
  },
  {
    input: ['pwwkew'],
    expected: 3
  }
]

module.exports = {
  name: 'Given a string s, find the length of the longest substring without repeating characters.',
  method: lengthOfLongestSubstring,
  tests
};
