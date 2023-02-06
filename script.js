// Gets grid's dimensions
const gridContainer = document.getElementById("grid-container");
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;

// Creates one block
function createBlock() {
    const gridBlock = document.createElement("div");
    gridBlock.style.height = `${gridHeight / 16}px`;
    gridBlock.style.width = `${gridHeight / 16}px`;
    gridContainer.appendChild(gridBlock);
}

// Loops 256 times to create a 16x16 grid (16²)
for (let i = 0; i < 256; i++) {
    createBlock();
}