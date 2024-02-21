
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


  squareBox.addEventListener ('mouseover',trailStart(squareBox));
  squareBox.addEventListener ('mouseleave',trailEnd(squareBox));
}
}
}






function trailStart(element){
    element.classList.add('pixelTrail');
}

function trailEnd(element){
    element.classList.remove('pixelTrail');
}

increaseSquares(35,35);