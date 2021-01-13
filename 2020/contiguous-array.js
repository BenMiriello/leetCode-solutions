/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxLength = function(nums) {
  let hash = {0:-1};
  let count = 0;
  let max = 0;
  for (let i=0;i<nums.length;i++) {
      if (nums[i] == 0) count--;
      else count++;

      if (hash[count]!=null) max = Math.max(max, i - hash[count]);
      else hash[count] = i 
  }
  return max;
};

const test = (nums, correct) => {
  console.log(nums)
  const before = new Date().getTime()
  const result = findMaxLength(nums)
  const after = new Date().getTime()
  console.log(result === correct ? 'PASSED' : 'FAILED', '|', after - before, 'ms | ', result)
  console.log()
}

test([], 0)
test([0], 0)
test([1], 0)
test([0,1], 2)
test([0,1,0], 2)
test([1,1,1,1,0,0,0], 6)
test([0,0,0,0,1,1,1], 6)