// Function Description

// Complete the formingMagicSquare function in the editor below.

// formingMagicSquare has the following parameter(s):

// int s[3][3]: a  array of integers
// Returns

// int: the minimal total cost of converting the input square to a magic square

let array = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

function magicSquare(array) {
  let r1 = array[0][0] + array[0][1] + array[0][2];
  let r2 = array[1][0] + array[1][1] + array[1][2];
  let r3 = array[2][0] + array[2][1] + array[2][2];
  let c1 = array[0][0] + array[1][0] + array[2][0];
  let c2 = array[0][1] + array[1][1] + array[2][1];
  let c3 = array[0][2] + array[1][2] + array[2][2];
  let d1 = array[0][0] + array[1][1] + array[2][2];
  let d2 = array[2][0] + array[1][1] + array[0][2];

  let cost1 = 15 - r1;
  let cost2 = 15 - r2;
  let cost3 = 15 - r3;
  let cost4 = 15 - c1;
  let cost5 = 15 - c2;
  let cost6 = 15 - c3;
  let cost7 = 15 - d1;
  let cost8 = 15 - d2;

  let cost = cost1 + cost2 + cost3;
  return cost;
}

console.log(magicSquare(array));
