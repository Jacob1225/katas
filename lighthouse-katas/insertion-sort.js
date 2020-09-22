//----------INSERTION SORT ALGORITHM----------

//generate a random array

let array = [];

for (let i = 0; i < 5; i++) {
  array.push(Math.floor(Math.random() * 101));
}

console.log(array);

//Function that sorts an array in ascending order
function insertionSort(arr) {
  const n = arr.length;

  //Loop through all of the elements of the array starting at index 1
  for (let i = 1; i < n; i++) {
    //Track the current element to compare
    let el = arr[i];
    //Variable j to compare the preceding element of el
    j = i - 1;

    //removes the el and inserts the preceeding element in its place
    while (j >= 0 && el < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = el;
  }
  return arr;
}

console.log(insertionSort(array));
