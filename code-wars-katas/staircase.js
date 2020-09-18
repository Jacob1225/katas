// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

function staircase(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (n - 1 - i <= j) {
        process.stdout.write("#");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

staircase(4);
