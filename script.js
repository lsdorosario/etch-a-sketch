// Gets grid's dimensions
const gridContainer = document.getElementById("grid-container");
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;

function getGridSize() {
    const sizeSelection = document.getElementById("size-selection");
    let gridSize = parseInt(sizeSelection.value);
    return gridSize;
}

// Creates one block
function createBlock() {
    const gridBlock = document.createElement("div");
    // Gets grid height, divides by selected grid size and converts to a px value
    gridBlock.style.height = `${gridHeight / getGridSize()}px`; 
    gridBlock.style.width = `${gridHeight / getGridSize()}px`;

    gridContainer.appendChild(gridBlock);

    gridBlock.addEventListener("mouseover", function() {
        gridBlock.classList.add("painted");
    });
}

// Resets current grid and creates new one based on user selection
function createGrid() {
    resetGrid();
    for (let i = 0; i < Math.pow(getGridSize(), 2); i++) {
        createBlock();
    }
}

function resetGrid() {
    gridContainer.innerHTML = '';
}