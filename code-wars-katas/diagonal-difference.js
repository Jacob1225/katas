// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
function diagonal_difference(arr) {
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }

      if (j === arr.length - 1 - i) {
        d2 += arr[i][j];
      }
    }
  }

  return Math.abs(d2 - d1);
}
