//----------Palindrome Kata--------------

function palindrome(s){
    //If empty string
    if (s.length === 0){
        return true;
    }

    let arr = s.toLowerCase().split("");

    
    for (let i = 0; i < arr.length; i++){
        if (!((arr[i] >= 'a' && arr[i] <='z') || (arr[i] >= '0' && arr[i] <= '9'))){
            arr.splice(i, 1);
            i--;
        }
    }
    let reversed = [...arr];
    reversed.reverse();
    console.log(arr);
    console.log(reversed);
    
    

    for (let j = 0; j < arr.length; j++){
        if (arr[j] !== reversed[j]){
            return false;
        }
    }
    return true;
};

let s = "0P";
console.log(palindrome(s));