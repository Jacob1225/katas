const multiplicationTable = function(maxValue) {
    let matrix = "";
    let count  = 1;

    for (let i = 1; i <= maxValue; i++) {
        for (let j = 1; j <= maxValue; j++) {
            matrix += count * j + " ";
        }
        matrix += "\n";
        count ++;
    }
    return matrix;
    
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));