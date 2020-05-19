/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const subBoxes = [[0,0,0], [0,0,0], [0,0,0]];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if ( board[r][c] != ".") {
                if ((subBoxes[Math.floor(r / 3)][Math.floor(c / 3)] += parseInt(board[r][c]) > 9)) {
                    return false;
                }
            }
        }
    }
    return true;
};