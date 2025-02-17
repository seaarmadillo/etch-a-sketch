// Remove margin and padding from the body
document.body.style.margin = "0";
document.body.style.padding = "0";

// Create a container for the header and button
const headerContainer = document.createElement("div");
headerContainer.style.display = "flex";
headerContainer.style.justifyContent = "center";
headerContainer.style.alignItems = "center";
headerContainer.style.padding = "20px";
headerContainer.style.width = "100%";


// Append the header container to the body
document.body.appendChild(headerContainer);


// Create an h1 element
const header = document.createElement("h1");
header.textContent = "etch-a-sketch";
header.style.margin = "0";
header.style.padding = "60px";

// Create a button to prompt for new grid size
const newGridButton = document.createElement("button");
newGridButton.type = "button";
newGridButton.textContent = "New Grid";
newGridButton.style.padding = "10px 20px";


// Append the h1 and button to the header container
headerContainer.appendChild(header);
headerContainer.appendChild(newGridButton);



// Add event listener to the new grid button
newGridButton.addEventListener("click", () => {
    let squaresPerSide = prompt("Enter the number of squares per side for the new grid:");
    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(squaresPerSide);
});


// Function to create the grid
function createGrid(squaresPerSide) {
    // Remove existing grid if any
    const existingGrid = document.querySelector(".grid");
    if (existingGrid) {
        existingGrid.remove();
    }

    // Create a new grid container
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.style.border = ".5px solid #000";
    grid.style.margin = "0 auto";
    grid.style.marginBottom = "100px";

    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";

    const gridSize = 960;
    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;

    const numItems = squaresPerSide * squaresPerSide;
    const itemSize = gridSize / squaresPerSide;

    // Create div elements with flexbox properties
    for (let i = 0; i < numItems; i++) {
        const item = document.createElement("div");
        item.style.border = "0px #000";
        item.style.boxSizing = "border-box";
        item.style.margin = "0";
        item.style.textAlign = "center";
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;

        // Add hover effect
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#000";
        });

        grid.appendChild(item);
    }

    // Append the grid element to the body
    document.body.appendChild(grid);
}

// Create the initial grid with 96 squares per side
createGrid(96);

// Add event listener to reset button
resetButton.addEventListener("click", () => {
    const items = document.querySelectorAll(".grid div");
    items.forEach((item) => {
        item.style.backgroundColor = "#fff";
    });
});

