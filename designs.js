// Select color input
// Select size input
var height, width, color;


// When size is submitted by the user, call makeGrid()
const allInputElements = document.querySelectorAll('input');
const submitInputElement = allInputElements[2];

submitInputElement.addEventListener('click', function(event){
    event.preventDefault();
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});


function makeGrid(getHeight, getWidth) {
  //code to remove previous canvas, if any
  const removePreviousCanvas = document.querySelector('#pixelCanvas');
  removePreviousCanvas.textContent = "";

  // code to create new grid
  for(let i = 1; i <= getHeight; i++){
    const newTableRow = document.createElement('tr');
    newTableRow.setAttribute('id', "table" + i);
    document.querySelector('#pixelCanvas').appendChild(newTableRow);
    for(let j = 1; j <= getWidth; j++ ){
      const newGrid = document.createElement('td');
      document.querySelector('#table' + i).appendChild(newGrid);
    }
  }

  //code to add color to cell
  var colorPick = document.querySelector('#colorPicker');
  document.querySelector('#pixelCanvas').addEventListener('click', function(event){
  if(event.target.nodeName === 'TD'){
    event.target.setAttribute('style', 'background-color');
    event.target.style.backgroundColor = colorPick.value;
  }
});
}
