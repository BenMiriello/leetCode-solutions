var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i,1))
      if (nums.slice(i).some(n => n != 0)) {
        i--;
      } else { 
        return nums;
      }
    }
  }
  return nums;
};



// let arraysAreEqual = (array1, array2) => (
//   array1.length === array2.length && array1.every((value, index) => value === array2[index])
// )

// let test = (nums, desired) => {
//   let result = moveZeroes(nums)
//   console.log(`[ ${nums} ] //=> `, result, ' * ', arraysAreEqual(desired, result))
// }

// test([0,1,0,3,12], [1,3,12,0,0])
// test([0,1,0,0,3,12], [1,3,12,0,0,0])