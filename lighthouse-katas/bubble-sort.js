//-----------BUBBLE SORT ALGORITHMN -------------

//Generate random array
let array = [];
for (let i = 0; i <= 5; i++) {
  array.push(Math.floor(Math.random() * 101));
}

console.log(array);

//Function that sorts an array in ascending order by bubbling elements to their respective positions
function bubbleSort(arr) {
  //Loop through all of the elements of the array
  for (let i = 0; i < arr.length; i++) {
    //Boolean variable to track if elements were swapped
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      //If the current element is greater than it's following element then swapped them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        //Set the boolean tracker to true
        swapped = true;
      }
    }
    //If no elements were swap then break out of the outer loop and the array is sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort(array));
