//-------Merge Sort algorithm solution #3---------------

//Driver or main function that runs the merge sort algorithm
function mergeSort(arr){
    let helperArr = arr.slice();
    mergePartitions(arr, 0, arr.length - 1, helperArr);

};

//Function that creates partitions for the array
function mergePartitions(arr, start, end, helperArr){
    if (start === end){
        return;
    }

    const middle = Math.floor((start + end) / 2);
    mergePartitions(helperArr, start, middle, arr);
    mergePartitions(helperArr, middle + 1, end, arr);
    merge(arr, start, middle, end, helperArr);
};

//Function that compares values and merges the subarrays together
function merge(arr, start, middle, end, helperArr){
    let i = start;
    let k = start;
    let j = middle + 1;

    //Compare values in the helper array and overwrite them into the main array 
    while (i <= middle && j <= end){
        if (helperArr[i] <= helperArr[j]){
            arr[k++] = helperArr[i++];
        } else {
            arr[k++] = helperArr[j++];
        }
    }

    //Make sure to copy the left side and right side of the helper array into the main array
    while (i <= middle){
        arr[k++] = helperArr[i++];
    }

    while (j <= end){
        arr[k++] = helperArr[j++];
    }
};

let array = [6, 3, 5];
mergeSort(array);

console.log(array);