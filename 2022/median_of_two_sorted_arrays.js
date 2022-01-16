const findMedianSortedArrays = (nums1, nums2) => {
  const nums = (nums1.concat(nums2)).sort((a, b) => a - b);
  if (nums.length % 2) {
    return nums[((nums.length + 1) / 2) - 1];
  } else {
    return (nums[(nums.length / 2) - 1] + nums[(nums.length / 2)]) / 2;
  }
};

const tests = [
  {
    input: [[1,3],[2]],
    expected: 2,
  },
  {
    input: [[1,2],[3,4]],
    expected: 2.5,
  },
  {
    input: [[1,3,5,7,9], [2,4]],
    expected: 4,
  }
]

module.exports = {
  name: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
  method: findMedianSortedArrays,
  tests
};
