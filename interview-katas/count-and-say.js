//----------Count and Say Kata--------

function countAndSay(n){

    if (n === 1){
        return '1';
    }

    let stringBuilder = "1";
    let output;
    for (let i = 0; i < n - 1; i ++){
        output = "";
        for (let j = 0; j < stringBuilder.length; j++){
            if (stringBuilder[j] === '1'){
                if (stringBuilder[j + 1] === '1'){
                    output += "21";
                    j++;
                } else {
                    output += "11";
                }
            } else if (stringBuilder[j] === '2'){
                output += "12"
            }
        }
        stringBuilder = output;
    }
    return output;
};

const n = 2;
console.log(countAndSay(5));
