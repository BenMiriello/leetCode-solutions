// Rotate Image

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// function reverse(nums, start = 0, end = nums.length - 1) {
//     while (start < end) {
//         tmp = nums[start]
//         nums[start] = nums[end]
//         nums[end] = tmp
//         start++
//         end--
//     }
//     return nums
// }

const transpose = matrix => {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < row; col++) {
            let temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }
    return matrix;
}

const reverse = matrix =>  matrix.map(row => row.reverse());

// // clockwise
// const rotate = matrix => reverse(transpose(matrix));

// // counter-clockwise
// const rotate = matrix => transpose(reverse(matrix));

// nested .map() all-in-one solution
const rotate = matrix => {
    return matrix.map((row, i) => 
         row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
};

///////////////////////////////////////////////////////////////////////////////////

const equalArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let row = 0; row < arr1.length; row++) {
        for (let cell = 0; cell < arr1[row].length; cell++) {
            if (arr1[row][cell] !== arr2[row][cell]) return false;
        }
    }
    return true;
}

const test = (matrix, expected) => {
    console.log('\nTesting: ', matrix);
    const result = rotate(matrix);
    if (equalArrays(result, expected)) console.log('PASSED ', result);
    else {
        console.log('FAILED ', result);
        console.log('Expected: ', expected);
    }
}

let matrix, expected

matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

expected = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

test(matrix, expected)

matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]

expected = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

test(matrix, expected)