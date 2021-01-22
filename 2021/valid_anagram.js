const isAnagram = (a, b) => {

}

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
  title: 'Valid Anagram',
  method: isAnagram,
  tests
};
