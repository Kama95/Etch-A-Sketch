
//const squareBox = document.createElement('div');
//squareBox.classList.add('square')
//const containerEle=document.querySelector('.container');
//containerEle.appendChild(squareBox);


//function increaseSquares (row,col){
  //for (let i=0; i < row;i++){
    //for (let j=0;j<col;j++){

    //const squareBox = document.createElement('div');
//squareBox.classList.add('square')
//const containerEle=document.querySelector('.container');
  //  containerEle.appendChild(squareBox);
  ///}
//}/
//}

//increaseSquares(16,16);

function createGrid(size){
  const sketchSpace = document.querySelector ('.sketchScreen');
  for (let i=0;i<size;i++){
    const column = document.createElement('div');
    column.classList.add('column');
  for (let j=0 ;j < size; j++){
    let row = document.createElement('div');
    row.classList.add('row');
  
    column.appendChild(row)
  }

  sketchSpace.appendChild(column)
  }
}
createGrid(5)