const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i ) {
      return true;
    }
  };
  return false;
};

const tests = [
  {
    input: [[1,2,3,1]],
    expected: true
  },
  {
    input: [[1,2,3,4]],
    expected: false
  },
  {
    input: [[1,1,1,3,3,4,3,2,4,2]],
    expected: true
  }
];

module.exports = {
  name: 'Contains Duplicate',
  method: containsDuplicate,
  tests
};
