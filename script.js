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

// Create a button element to reset the grid
const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Reset";
resetButton.style.padding = "10px 20px";

// Add event listener to the reset button
resetButton.addEventListener("click", () => {
    const items = grid.querySelectorAll("div");
    items.forEach((item) => {
        item.style.backgroundColor = "#fff";
    });
});


// Append the h1 and button to the header container
headerContainer.appendChild(header);
headerContainer.appendChild(resetButton);



// Create a div element with flexbox properties
const grid = document.createElement("div");
grid.classList.add("grid");

grid.style.border = "1px solid #000";
grid.style.margin = "0 auto";
grid.style.marginBottom = "100px";

grid.style.display = "flex";
grid.style.flexWrap = "wrap";


grid.style.width = "960px";
grid.style.height = "960px";


const numItems = (960 / 16) * (960 / 16);

// Create div elements with flexbox properties

for (let i = 0; i < numItems; i++) { 
    const item = document.createElement("div");
    item.style.border = "0.5 px solid #000";
    item.style.boxSizing = "border-box";
    item.style.margin = "0";
    item.style.textAlign = "center";
    item.style.width = "16px"; 
    item.style.height = "16px"; 
    grid.appendChild(item);

//add hover effect
    item.addEventListener("mouseover",(e) => {
        item.style.backgroundColor = "#000";
});

    grid.appendChild(item);
}
// Append the grid element to the body
document.body.appendChild(grid); 

