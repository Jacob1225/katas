//----------Count and Say Kata--------

function countAndSay(n){

    //for n === 1 return immediately '1'
    if (n === 1){
        return '1';
    }
    
    let stringBuilder = "1";
    let output;
    for (let i = 0; i < n - 1; i ++){
        output = "";
        for (let j = 0; j < stringBuilder.length; j++){
            let count = 1;
            for (let k = j + 1; k < stringBuilder.length; k++){
                if (stringBuilder[k] === stringBuilder[j]){
                    count++
                } else {
                    break;
                }
            }
            output += `${count}${stringBuilder[j]}`;
            j += count - 1;
        }
        stringBuilder = output;
    }
    return output;
};

const n = 2;
console.log(countAndSay(5));
