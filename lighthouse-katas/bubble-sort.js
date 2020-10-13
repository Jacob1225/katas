//-----------BUBBLE SORT ALGORITHMN -------------
let array = [5, 10, , 2];

//Function that sorts an array in ascending order by bubbling elements to their respective positions
function bubbleSort(arr) {
  let count = 0;
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
      console.log(arr);
    }
    //If no elements were swap then break out of the outer loop and the array is sorted
    if (!swapped) {
      break;
    }
  }

  return (arr, count);
}

console.log(bubbleSort(array));
