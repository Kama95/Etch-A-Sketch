
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
createGrid(20)

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
