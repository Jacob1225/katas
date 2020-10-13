//-------Merge Sort algorithm solution #3---------------

//Driver or main function that runs the merge sort algorithm
function mergeSort(arr){
    let colorChange = [];
    let helperArr = arr.slice();
    mergePartitions(arr, 0, arr.length - 1, helperArr, colorChange);
    return colorChange;

};

//Function that creates partitions for the array
function mergePartitions(arr, start, end, helperArr, colorChange){
    if (start === end){
        return;
    }

    const middle = Math.floor((start + end) / 2);
    mergePartitions(helperArr, start, middle, arr, colorChange);
    mergePartitions(helperArr, middle + 1, end, arr, colorChange);
    merge(arr, start, middle, end, helperArr, colorChange);
};

//Function that compares values and merges the subarrays together
function merge(arr, start, middle, end, helperArr, colorChange){
    let i = start;
    let k = start;
    let j = middle + 1;

    //Compare values in the helper array and overwrite them into the main array 
    while (i <= middle && j <= end){
        
        //push the values that are being compared to the color change array to change their color
        colorChange.push([i, j]);

        //push them again to change their color back 
        colorChange.push([i, j]);

        if (helperArr[i] <= helperArr[j]){
            colorChange.push([k, helperArr[i]]);
            arr[k++] = helperArr[i++];
        } else {
            colorChange.push([k, helperArr[j]]);
            arr[k++] = helperArr[j++];
        }
    }

    //Make sure to copy the left side and right side of the helper array into the main array
    while (i <= middle){
        colorChange.push([i, i]);
        colorChange.push([i, i]);
        colorChange.push([k, helperArr[i]]);
        arr[k++] = helperArr[i++];
    }

    while (j <= end){
        colorChange.push([j, j]);
        colorChange.push([j, j]);
        colorChange.push([k, helperArr[j]]);
        arr[k++] = helperArr[j++];
    }
};

let array = [6, 3, 5];
console.log(mergeSort(array));

console.log(array);