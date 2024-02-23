let size;

const button = document.createElement('button');
button.textContent='Change Grid Size';
const container = document.querySelector('.container');
container.appendChild(button)

button.addEventListener('click', ()=>{
let size = Number(prompt('Enter a number between 2 and 100'));
createGrid(size);
addHoverEvent();
})

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


createGrid(size);

function addHoverEvent(){
  const Alldivs = document.querySelectorAll('.row');
  Alldivs.forEach (row => {
    row.addEventListener ('mouseover', ()=>
    row.classList.add('afterClick'));
    row.addEventListener ('click', ()=> 
    row.classList.remove('afterClick'));
  })
  
}


addHoverEvent()
