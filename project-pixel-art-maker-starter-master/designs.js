// defining variables
const selectedHeight = document.getElementById('inputHeight');
const selectedWidth = document.getElementById('inputWidth');
const selectedColor = document.getElementById('colorPicker');
const selectedGrid = document.getElementById('pixelCanvas')

// makeGrid() function called when user submit the grid size
function makeGrid(height, width) {
  for (var i = 1; i <= height; i++) {
    const newrow = selectedGrid.insertRow(0);
    for (var j = 1; j <= width; j++) {
      newrow.insertCell(0);
    }
  }
}

// submit event used to submit the grid data
document.addEventListener('submit', function() {
  selectedGrid.innerHTML = '';
  event.preventDefault();
  makeGrid(selectedHeight.value, selectedWidth.value);
})

// click event used to add color
selectedGrid.addEventListener('click', function() {
  if (event.target.nodeName === 'TD') {
      event.target.style.background = selectedColor.value;
  }
})
