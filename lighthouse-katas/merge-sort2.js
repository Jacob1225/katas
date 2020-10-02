//---------MERGE SORT ALGORITHM SECOND SOLUTION-------------

//Function that will seperate the array in halves
function mergeSort(arr){
    
    //If the array has 1 element then it is already sorted thus return
    if (arr.length <= 1){
        return arr;
    }

    //Create two arrays by dividing the array in half
    const middleIndex = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex); 

    //Use recursion to sort the halves
    mergeSort(leftArray);
    mergeSort(rightArray);

    //Start compare the values and swapping them in the array
    let k = 0;
    let i = 0;
    let j = 0;

    //Loop until i or j is greater than their array length
    while (i < leftArray.length && j < rightArray.length){
        
        //Compare the values of each half
        if (leftArray[i] <= rightArray[j]){
            arr[k++] = leftArray[i++];
        } else {
            arr[k++] = rightArray[j++];
        }
    }

    //Make sure that all values are overwritten to the main array
    while (i < leftArray.length){
        arr[k++] = leftArray[i++];
    }

    while (j < rightArray.length){
        arr[k++] = rightArray[j++];
    }

    return arr;
};

let array = [50, 23, 41, 17];
console.log(mergeSort(array));
