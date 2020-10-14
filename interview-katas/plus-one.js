//Plus one kata

//Given an input array that represents a non-negative integer
//Increment the integer by one and return the number

function plus(digits){
    let numberString = digits.join('');

    console.log(numberString)
    
    let number = BigInt(numberString);

    console.log(number);

    let add = (number + 1n);

    console.log(add);

    let str = add.toString();

    let result = str.split('');

    return result;
}

let array = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plus(array));