function spiralOrder(matrix) {
  let result = [];
  if (matrix.length === 0) {
    return result;
  }
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }
  return result;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(arr));

// Time Complexity - O(m*n) - where m is the number of rows in the matrix, and n is the number of columns
// Space Complexity - O(m*n)- where m is the number of rows in the matrix, and n is the number of columns
