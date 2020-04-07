/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  let unique = {}
  unique[arr[0]] = 1
  for (let i = 1; i < arr.length; i++) {
      if (unique[arr[i]]) {
          unique[arr[i]] = unique[arr[i]] + 1
      } else {
          unique[arr[i]] = 1
      }
  }

  let total = 0
  let keys = Object.keys(unique)
  for (let j = 1; j < keys.length; j++) {
      if (unique[`${keys[j] - 1}`] == unique[keys[j - 1]]) {
          total += unique[`${keys[j] - 1}`]
      }
  }

  // console.log(total)
  return total
};

countElements([55,1,2,3,2,1,2,5,6]) // 6
countElements([1,1,2,2])  // 2
countElements([1,3,2,3,5,0]) // 3

// Runtime: 56 ms
// Memory Usage: 33.9 MB