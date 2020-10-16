//--------Common prefix Kata-----------

var longestCommonPrefix = function(strs) {

    //If input array is empty
    if (strs.length === 0){
        return "";
    }
    
    //Set the first word of the array as the temporary shortest word
    let sLength = strs[0].length;
    let shortest = strs[0];

    //Loop through each word to find the word with the actual shortest length
    for (let i = 0; i < strs.length; i++){
      if (strs[i].length < sLength){
        shortest = strs[i];
        sLength = strs[i].length;
      }
    }

    //Loop through words and compare with the shortest word to see if they have a common prefix
    let pointerIndex = -1;
    let commonIndex = -1;
    for (let j = 0; j < strs.length; j++){
      const word = strs[j];
      
      //Reset the pointer back to -1 at each new word
      pointerIndex = -1;
      
      for (let k = 0; k < sLength; k++){
        if (word[k] === shortest[k]){
          pointerIndex = k;
        
        } else {
          break;
        }
      }
      
      //If pointerIndex is -1 then there was no common prefix and we should return ""
      if (pointerIndex === -1){
        return "";

     //If the common Index is greater we must set it to the smaller commonIndex -> pointerIndex
      } else if (commonIndex > pointerIndex){
        commonIndex = pointerIndex;
    
     //If we are comparing the first word in the array & there is a common prefix, we set it as the pointerIndex
      } else if (j === 0){
          commonIndex = pointerIndex;
      }
    }
    
    //If there is a common index across all words, we return a substring of the shortest word.
    const prefix = shortest.substring(0, commonIndex + 1);
    return prefix;
  };

  console.log(longestCommonPrefix(["flower","flow","flight"]));
  