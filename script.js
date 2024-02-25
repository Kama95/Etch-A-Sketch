let size;

<<<<<<< HEAD
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
=======
const button = document.createElement('button');
button.textContent='Change Grid Size';
const container = document.querySelector('.container');
container.appendChild(button)

const sketchContainer = document.querySelector ('.sketchContainer')
container.appendChild(sketchContainer);
const sketchSpace =document.querySelector('.sketchScreen');



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
>>>>>>> EtchAsketch
}

createGrid(16);

function addHoverEvent(){
  const Alldivs = document.querySelectorAll('.row');
  Alldivs.forEach (row => {
    row.addEventListener ('mouseover', ()=>
    row.classList.add('afterClick'));

  }) 
}

<<<<<<< HEAD

function trailStart(element){
    element.classList.add('pixelTrail');
}

function trailEnd(element){
    element.classList.remove('pixelTrail');
}

increaseSquares(10,10);
=======
function removeClass(){ 
  const Alldivs = document.querySelectorAll('.row');
  Alldivs.forEach(row => {
    row.classList.remove('afterClick');
  })
}
function deleteGrid(){
  const sketchSpace = document.querySelector('.sketchScreen');
    sketchSpace.innerHTML='';
}


addHoverEvent()

button.addEventListener('click',()=>{
  deleteGrid();
  let size = Number(prompt('Enter a number between 2 and 100'));
  if (size < 2 || size > 100)
  { 
    sketchSpace.innerHTML= "Ivalid Input. Enter any number between 2 and 100"
}
else{
  createGrid(size)
  addHoverEvent();}
  

  })
>>>>>>> EtchAsketch
