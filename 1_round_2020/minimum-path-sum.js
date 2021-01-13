// Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
    if (!grid || !grid.length) return 0;
    let temp = [[grid[0][0]]];
    let m = grid.length, n = grid[0].length;
    for (let j = 1; j < n; j++) {
        temp[0][j] = temp[0][j-1] + grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        temp[i] = [];
        temp[i][0] = temp[i-1][0] + grid[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            temp[i][j] = Math.min(temp[i][j-1], temp[i-1][j]) + grid[i][j];
        }
    }
    return temp[m-1][n-1];
};
  
  
  const test = (input, expected) => {
    console.log();
    console.log(input);
    const result = minPathSum(input);
    console.log(result === expected ? "PASSED" : "FAILED", result);
  };
  
  test(
    [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ],
    7
  );
  
  test(
    [
      [1,5,1,1,1],
      [1,1,1,5,1],
      [5,5,5,5,1]
    ],
    11
  );
  
  test([[0]],0)
  
  test([[0,0],[0,0]], 0)
  
  test(
    [
      [7,0,8,8,0,3,5,8,5,4],
      [4,1,2,9,9,6,0,8,6,9],
      [9,7,1,1,0,1,2,4,1,7]
    ], 
    27
  )
  
  // const minPathSum = grid => {
//     const traverse = (m, n) => {
//       if (m === grid.length - 1) {
//         if (typeof grid[m][n + 1] === 'number') {
//           return grid[m][n] + traverse(m, n + 1)
//         }
//         return grid[m][n]
//       }
//       if (n === grid[m].length - 1) {
//         return grid[m][n] + traverse(m + 1, n)
//       }
//       return grid[m][n] + Math.min(traverse(m,n + 1), traverse(m + 1, n))
//     }
//     return traverse(0,0)
//   };