// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

function minMaxSum(arr) {
  let min = 0;
  let max = 0;

  //sort the array
  arr.sort((a, b) => a - b);

  arr.forEach((num, index) => {
    if (index < arr.length - 1) {
      min += num;
    }
    if (index > 0) {
      max += num;
    }
  });
  console.log(min, max);
}

minMaxSum([1, 3, 5, 7, 9]);
