'use strict';

const max = (matrix) => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
  let maximum = matrix[0][0];
  for (const row of matrix) {
    for (const column of row) {
      if (column > maximum) maximum = column;
    }
  }
  return maximum;
};

module.exports = { max };
