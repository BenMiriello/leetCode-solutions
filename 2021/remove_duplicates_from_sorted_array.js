// Constraints:
//   0 <= nums.length <= 3 * 104
//   -104 <= nums[i] <= 104
//   nums is sorted in ascending order.

const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  };
  return nums;
};

const tests = [
  {
    input: [1,1,2],
    expected: [1,2]
  },
  {
    input: [0,0,1,1,1,2,2,3,3,4],
    expected: [0,1,2,3,4]
  },
];

module.exports = {
  name: 'Remove duplicates from sorted array',
  method: removeDuplicates,
  tests
};
