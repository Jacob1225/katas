//------------FUNCTION THAT REMOVES DUPLICATES FROM AN ARRAY AND OUTPUTS THE LENGTH----------------


let array = [0, 0, 0, 1, 1, 1, 2, 2, 3, 4];

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr.length; j++){
            if ((arr[i] === arr[j]) && (j !== i)){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
};

console.log(removeDuplicates(array));