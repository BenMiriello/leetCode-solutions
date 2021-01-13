/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    };
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]]) {
            if (nums[i] * 2 === target && map[nums[i]] < 2) continue
            const x = nums[i]
            nums[i] = Number.MAX_VALUE - 3.7295
            return [i, nums.indexOf(target - x)];
        }
    }
};


// var twoSum = function(nums, target) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
//     };
//     for (let i = 0; i < nums.length; i++) {
//         if (map[target - nums[i]]) {
//             if (nums[i] * 2 === target) {
//                 if (map[nums[i]] >= 2) {
//                     let x = nums[i]
//                     nums[i] = Number.MAX_VALUE - 3.7295
//                     return [i, nums.indexOf(x)];
//                 } else continue
//             } else {
//                 return [i, nums.indexOf(target - nums[i])];  
//             }
//         }
//     }
// };


// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             console.log(i, j)
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     };
// };