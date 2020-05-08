

var rotate = function(nums, k) {
    const r = k % nums.length;
    return nums.unshift(...nums.splice(nums.length - r, r));
};