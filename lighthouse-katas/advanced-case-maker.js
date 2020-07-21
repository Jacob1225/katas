const makeCase = function(input, style) {
    const splitString = input.split(" ");
    let result = "";

    //convert style into an array
    const styling = Array.isArray(style) ? style : style.split(" ");
    console.log(styling);
    
    if (styling.some(el => el === "camel" || el ===  "pascal" || el ===  "snake" || el ===  "kebab" || el ===  "title")) {

        if (styling.includes("camel")) {
            const formatString = splitString.map((word, index) => index > 0 ? (word.charAt(0).toUpperCase() + word.substring(1)) : word);
            result = formatString.join("");
        
        } else if (styling.includes("pascal")) {
            const formatString = splitString.map((word, index) => word.charAt(0).toUpperCase() + word.substring(1));
            result = formatString.join("");
            
        } else if (styling.includes("snake")) {
            result = splitString.join("_");
            
        } else if (styling.includes("kebab")) {
            result = splitString.join("-");
         
        } else if (styling.includes("title")) {
            const formatString = splitString.map(word =>  word.charAt(0).toUpperCase() + word.substring(1) + " ");
            result = formatString.join("");
        }

    } 
    if (styling.some(el => el === "vowel" || el === "consonant")) {
        
        if(styling.includes("vowel")) {
            
           if (result) {
               
               for (let i = 0; i < result.length; i++) {
                   result[i] === 'a' || result[i] ===  'i' || result[i] ===  'e' || result[i] ===  'o' || result[i] ===  'u' ? result[i].toUpperCase() : result[i];
               }
        
           } else {
               for (let i = 0; i < input.length; i++) {  
                input[i] === 'a' || input[i] === 'i' || input[i] === 'e' || input[i] === 'o' || input[i] === 'u' ? result += input[i].toUpperCase() : result += input[i];
               }
           }
           
        } else {
            if (result) {
                for (let i = 0; i < input.length; i++) { 
                    result[i] === 'a' || result[i] ===  'i' || result[i] ===  'e' || result[i] ===  'o' || result[i] ===  'u' ? result[i] : result[i].toUpperCase();

                } 
            } else {
                for (let i = 0; i < input.length; i++) {  
                    input[i] === 'a' || input[i] === 'i' || input[i] === 'e' || input[i] === 'o' || input[i] === 'u' ? result += input[i] : result += input[i].toUpperCase();
                }
            }  
        }
    

    }
    if (styling.some(el => el === "upper" || el === "lower")) {
        
        if (styling.includes("upper")) {
         
            if (result) {
       
                result = result.toUpperCase();
                 
            } else {
                result = input.toUpperCase();
            }
        } else {
           
            if (result) {
                result = result.toLowerCase();
            } else {
                result = input.toLowerCase();
            }

        }
    }
        
    return result;
}


    
  
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "snake"]));