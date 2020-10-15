//-------Leet Code Valid Sodoku Kata------------

function soduku(board){
    let withinRow = false;
    let withinColumn = false;
  
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board.length; j++){
        for (let k = 0; k < board.length; k++){
          for (let l = 0; l < board.length; l++){
              withinRow = false;
              withinColumn = false;
            if (k === i && j === l){
              continue; 
            }
            //same row
            if (board[k][l] !== '.' && board[i][j] === board[k][l] && k === i){
              return false;
            
            //same column
            } else if (board[k][l] !== '.' && board[i][j] === board[k][l] && j === l){
              return false;
              
            } else if (board[k][l] !== '.' && board[i][j] === board[k][l]){
              //check within rows
              if ((i === 1 || i === 4 || i === 7) && (k === i + 1 || k === i - 1)){
                withinRow = true;
              } else if ((i === 0 || i === 3 || i === 6) && (k === i + 1 || k === i + 2)){
                withinRow = true;
              } else if ((i === 2 || i === 5 || i === 8) && (k === i - 1 || k === i - 2)) {
                withinRow = true;
              }
              
              //check if within columns
              if ((j === 1 || j === 4 || j === 7) && (l === j + 1 || l === j - 1)){
                withinColumn = true;
              } else if ((j  === 0 || j === 3 || j === 6) && (l === j + 1 || l === j + 2)) {
                withinColumn = true;
              } else if ((j === 2 || j === 5 || j === 8) && (l === j - 1 || l === j - 2)) {
                withinColumn = true;
              } 
              if (withinRow && withinColumn){
                return false;
              }
            }
          }
        }
      }
    }
  return true;
}

const board = 
[[".","4",".",".",".",".",".",".","."],[".",".","4",".",".",".",".",".","."],[".",".",".","1",".",".","7",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".","3",".",".",".","6","."],[".",".",".",".",".","6",".","9","."],[".",".",".",".","1",".",".",".","."],[".",".",".",".",".",".","2",".","."],[".",".",".","8",".",".",".",".","."]];


console.log(soduku(board));