const camelCase = function(input) {
    const splitInput = input.split(" ");

    const camelCase = splitInput.map((word, index) => index > 0 ? word.charAt(0).toUpperCase() + word.substring(1) : word).join("");
    
    return camelCase;

    
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));