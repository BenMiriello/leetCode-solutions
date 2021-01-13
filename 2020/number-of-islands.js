//  Number of Islands

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    // console.log(grid)

  const checkForOne = (y, x) => {
    // console.log('checking', y, x, grid[y], grid[y] ? grid[y][x] : null)
    if (grid[y] && grid[y][x]) {
      grid[y][x] = '2'
      if (grid[y - 1] && grid[y - 1][x] === '1') {
        checkForOne(y - 1, x)
      }
      if (grid[y] && grid[y][x + 1] === '1') {
        checkForOne(y, x + 1)
      }
      if (grid[y + 1] && grid[y + 1][x] === '1') {
        checkForOne(y + 1, x)
      }
      if (grid[y] && grid[y][x - 1] === '1') {
        checkForOne(y, x - 1)
      }
      grid[y][x] = '0'
    }
  }
  
  let islands = 0

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '1') {
        checkForOne(y, x)
        islands ++
        // console.log(grid)
      }
    }
  }
  // console.log(grid)
  return islands
};

const test = (grid, expected) => {
  console.log()
  console.log(grid)
  let result = numIslands(grid)
  console.log(result === expected ? "PASSED" : "FAILED", result)
}

test([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']], 1)
test([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']], 3)
test([["1","0","1","1","0","1","1"]], 3)