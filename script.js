
//const squareBox = document.createElement('div');
//squareBox.classList.add('square')
//const containerEle=document.querySelector('.container');
//containerEle.appendChild(squareBox);


function increaseSquares (row,col){
  for (let i=0; i < row;i++){
    for (let j=0;j<col;j++){

    const squareBox = document.createElement('div');
squareBox.classList.add('square')
const containerEle=document.querySelector('.container');
    containerEle.appendChild(squareBox);
  }
}
}

increaseSquares(50,50);