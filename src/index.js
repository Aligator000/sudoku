module.exports = function solveSudoku(matrix) {

    let notOurDigit = {};
    let zeros = 1;
  
    while (zeros > 0) {
        zeros = 0;
        for(let row = 0; row < matrix.length; row++){
            for(let column = 0; column < matrix.length; column++){
                //console.log(matrix[row][column]);
                if(matrix[row][column] === 0){
                    notOurDigit = {};
                for(let i = 0; i < 9; i++) {
                        if (matrix[row][i] > 0) {
                            notOurDigit[matrix[row][i]] = true;
                        }
                        if (matrix[i][column] > 0) {
                            notOurDigit[matrix[i][column]] = true;
                        }
                }
                let alreadyIn = Object.keys(notOurDigit);
                if (alreadyIn.length === 8){
                    for (let i = 1; i < 10; i ++){
                        //console.log((alreadyIn.indexOf(i.toString()) < 0));
                        if (alreadyIn.indexOf(i.toString()) < 0){
                                matrix[row][column] = i;
                       }
                   }
               } else {
                   zeros++;
               }
            }
        }
    }
  }
    return matrix;
  }
  
  let matrix = [
  [5, 3, 4, 6, 7, 8, 9, 0, 0],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]];
  
  //console.log(solveSudoku(matrix));
