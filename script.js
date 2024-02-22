
//const squareBox = document.createElement('div');
//squareBox.classList.add('square')

//containerEle.appendChild(squareBox);
 const gridSides = 600;
 let row = 16;
 let col = 16;


function increaseSquares (row,col){
    const containerEle=document.querySelector('.container');

  for (let i=0; i < row ;i++){
  

    const squareBox = document.createElement('div');
squareBox.classList.add('square')
containerEle.appendChild(squareBox);


  squareBox.addEventListener ('mouseover',trailStart(squareBox));
  squareBox.addEventListener ('mouseleave',trailEnd(squareBox));
}
}


function trailStart(element){
    element.classList.add('pixelTrail');
}

function trailEnd(element){
    element.classList.remove('pixelTrail');
}

increaseSquares(10,10);