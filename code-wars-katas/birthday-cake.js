// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest

function birthdayCake(arr) {
  //find the tallest candle height
  let tallest = 0;
  for (num of arr) {
    if (num > tallest) {
      tallest = num;
    }
  }

  //count the number of candles of the tallest height
  let count = 0;
  for (num of arr) {
    if (num === tallest) {
      count++;
    }
  }
  return count;
}
