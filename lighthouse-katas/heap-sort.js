//---------HEAP SORT ALGORITHM-------------

//Implementing a min-heap where
//For this implementation I am practicing object oriented programming

//left child = i * 2
//right child = i * 2 + 1
//parent = i / 2

let arr = [29, 39, 12];
console.log(arr);

//function that swaps two values
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//function that creates a max heap
function heapRoot(arr, length, index) {
  let leftChild = 2 * index + 1;
  let rightChild = 2 * index + 2;
  let parent = index;

  if (leftChild < length && arr[leftChild] > arr[parent]) {
    parent = leftChild;
  }

  if (rightChild < length && arr[rightChild] > arr[parent]) {
    parent = rightChild;
  }

  if (parent != index) {
    swap(arr, parent, index);
    heapRoot(arr, length, parent);
  }
  console.log(arr);
  return arr;
}

//Function that uses the max heap data structure to sort the array
function heapSort(arr) {
  let n = arr.length;
  let i = Math.floor(n / 2 - 1);
  let k = n - 1;

  while (i >= 0) {
    heapRoot(arr, n, i);
    i--;
  }

  while (k >= 0) {
    swap(arr, 0, k);
    heapRoot(arr, k, 0);
    k--;
  }

  return arr;
}

heapSort(arr);
console.log(arr);
