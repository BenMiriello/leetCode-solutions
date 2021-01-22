const isAnagram = (a, b) => a.split('').sort().join() === b.split('').sort().join();

const tests = [
  {
    input: ["anagram", "nagaram"],
    expected: true
  },
  {
    input: ["rat", "car"],
    expected: false
  }
];

module.exports = {
  name: 'Valid Anagram',
  method: isAnagram,
  tests
};
