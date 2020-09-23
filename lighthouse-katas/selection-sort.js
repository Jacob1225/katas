//---------- SELECTION SORT ALGORITHMN--------------

//generate random array
let array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.floor(Math.random() * 101));
}

console.log(array);

//Function that sorts an array in ascending order by finding the min value and placing it at the start of the array
function selectionSort(arr) {
  //Loop through all the values of the array to find the minimum
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];

    //Loop through the array starting at i the find the min at each iteration
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    //Swap the value of arr[i] with the new minimum value
    let temp = min;
    arr[arr.indexOf(min)] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort(array));
