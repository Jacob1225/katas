//-------------FUNCTION THAT TAKES IN A 2D ARRAY AND OUTPUTS A STRING WITH THE REPEATED VALUES--------------------
const repeatNumbers = function(data) {
    let result = "";
    for (let set of data) {
        for (let i = 0; i < set[1]; i++) {
            i === set[1] - 1 ? result += set[0] + " " : result += set[0];
        }
    }
    return result;
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));