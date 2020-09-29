//---------- SELECTION SORT ALGORITHMN--------------

//generate random array
let array = [];
for (let i = 0; i <= 40; i++) {
  array.push(Math.floor(Math.random() * (900 - 5 + 1) + 5));
}

//Function that sorts an array in ascending order by finding the min value and placing it at the start of the array
function selectionSort(arr) {
  
  //Loop through all of the elements in the array
  for (let i = 0; i < arr.length; i++){
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++){
      if (arr[minIndex] > arr[j]){
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

console.log(selectionSort(array));
