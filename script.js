let size;

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
}

createGrid(16);

function addHoverEvent(){
  const Alldivs = document.querySelectorAll('.row');
  Alldivs.forEach (row => {
    row.addEventListener ('mouseover', ()=>
    row.classList.add('afterClick'));

  }) 
}

function addTouchOver(){
  const Alldivs = document.querySelectorAll('.row');
  Alldivs.forEach (row => {
    row.addEventListener ('touchmove', ()=>
    row.classList.add('afterClick'));

  }) 
}

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


addHoverEvent();
addTouchOver();

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

