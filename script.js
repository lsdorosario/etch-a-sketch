// Gets grid's dimensions
const gridContainer = document.getElementById("grid-container");
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;


function createBlock() {
    const gridBlock = document.createElement("div");
    gridBlock.style.height = `${gridHeight / 16}px`;
    gridBlock.style.width = `${gridHeight / 16}px`;
    gridBlock.style.border = "1px solid black";
    gridContainer.appendChild(gridBlock);
}

createBlock();