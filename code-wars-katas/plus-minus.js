// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print the ratios of positive, negative and zero values in the array.
//Each value should be printed on a separate line with  digits after the decimal.
//The function should not return a value.

function plusMinus(arr) {
  const n = arr.length;

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (const num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  positive = positive / n;
  negative = negative / n;
  zero = zero / n;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
