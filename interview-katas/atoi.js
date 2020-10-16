//--------String To Integer Kata-----------

function atoi(s){
  //Max and min integers
  const INT_MIN = Math.pow(2, 31) * -1;
  const INT_MAX = Math.pow(2, 31) - 1;

  //Remove whitespace from beginning and end of string
  let number = s.trim();
  
  console.log(number);
  
  const first = number[0];
  const second = number[1];
  
  //If first char is not a digit, '+' or '-'
  if (!(first >= '0' && first <= '9') && first !== '+' && first !== '-'){  
    return 0;
  } else if ((first === '+' || first === '-') && !(second >= '0' && second <= '9')) {
    return 0;
  }
 
  
  let num = "";
  for (let i = 0; i < number.length; i++){
    
    //if char is an operator following a digit
    if (((number[i] === '-' || number[i] === '+') && i !== 0) || (!(number[i] >= '0' && number[i] <= '9') && i !== 0)) {
      num = number.substring(0, i);
      break;
    } else {
      num += number[i];
    }
  }
  
  const result = Number(num);
 
  
  
  if (result < INT_MIN){
    return INT_MIN;
  } else if(result > INT_MAX){
    return INT_MAX;
  } else {
    return result;
  }
  
};

let s = "21474836460";
console.log(atoi(s));
