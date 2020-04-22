/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    let count = sum = 0;
    const map = {0: 1};
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k]) count += map[sum - k];
        map[sum] = map[sum] ? map[sum] + 1 : 1
    }
    return count;
};

// var subarraySum = function(nums, k) {
//     let count = 0;
    
//     for (let start = 0; start < nums.length; start++) {
//         let sum = 0;
//         for (let end = start; end < nums.length; end++) {
//             sum += nums[end];
//             if (sum === k) {
//                 count++;
//             }
//         }
//     };
    
//     return count;
// };


// var subarraySum = function(nums, k) {
//     let combos = 0;
    
//     let sum = new Array(nums.length + 1);
//     sum[0] = 0;
    
//     for (let i = 1; i <= nums.length; i++) {
//         sum[i] = sum[i - 1] + nums[i - 1];
//     };
    
//     for (let start = 0; start < nums.length; start++) {
//         for (let end = start + 1; end <= nums.length; end++) {
//             if (sum[end] - sum[start] === k) {
//                 combos++;
//             }
//         }
//     }

//     return combos;
// };
