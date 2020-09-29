//--------- MERGE SORT ALGORITHM -----------

//Merge sort divides the array into two halves and repeatedly sorts each half then merges them back together

//Creating an array with 100 random values between 0 and 100
let array = [];
for (let i = 0; i <= 290; i++) {
  array.push(Math.floor(Math.random() * (900 - 5 + 1) + 5));
}

//Function that is responsible for comparing the left and right arrays then returning the sortedarray
function merge(left, right) {
  let sortedArray = [];

  //Looping until one of the arrays has reached 0 elements
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  //Using the spread operator to concat the sorted elements, with the left and right arrays
  return [...sortedArray, ...left, ...right];
}

//Main that takes an unsorted array as input and uses recursion to sort it in ascending order
function mergeSort(arr) {
  //If the array has 1 or 0 elements then exit out of the function
  if (arr.length <= 1) {
    return arr;
  }

  //Create the left and right arrays by splitting the original array in the middle
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  //Return the sorted array from the merge function
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(array));
