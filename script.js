// Gets grid's dimensions
const gridContainer = document.getElementById("grid-container");
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;

function createGridBlock() {
    let gridBlock = document.createElement("div");
    gridBlock.style.height = "100px"
    gridBlock.style.width = "100px"
    gridBlock.style.border = "1px solid black";
    gridContainer.appendChild(gridBlock);
}

createGridBlock();