// Gets grid's dimensions
const gridContainer = document.getElementById("grid-container");
const gridHeight = gridContainer.offsetHeight;
const gridWidth = gridContainer.offsetWidth;

// Creates one block
function createBlock() {
    const gridBlock = document.createElement("div");
    // Gets grid height, divides by selected grid size and converts to a px value
    gridBlock.style.height = `${gridHeight / 16}px`; 
    gridBlock.style.width = `${gridHeight / 16}px`;

    gridContainer.appendChild(gridBlock);

    gridBlock.addEventListener("mouseover", function() {
        gridBlock.classList.add("painted");
    });
}

// function selectGridSize() {
//     const gridSize = document.getElementById("grid-size");
//     return parseInt(gridSize.value);
// }

for (let i = 0; i < 256; i++) {
    createBlock();
}