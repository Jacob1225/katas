//Building max and min heaps

//Min HEAP
//Parent always smaller than children

//      1
//  2       3
//4   5   6    7

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function minHeap(arr, length, index) {
  let parent = index;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  if (left < length && arr[left] < arr[parent]) {
    parent = left;
  }

  if (right < length && arr[right] < arr[parent]) {
    parent = right;
  }

  if (parent != index) {
    swap(arr, parent, index);
    minHeap(arr, length, parent);
  }
}

let arr = [89, 29, 13, 93, 43];

function heap(arr) {
  let n = arr.length;
  let i = Math.floor(n / 2 - 1);
  let k = n - 1;

  while (i >= 0) {
    minHeap(arr, n, i);
    i--;
  }

  while (k >= 0) {
    swap(arr, 0, k);
    minHeap(arr, k, 0);
    k--;
  }
  return arr;
}

console.log(heap(arr));
