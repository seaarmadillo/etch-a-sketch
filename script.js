// Remove margin and padding from the body
document.body.style.margin = "0";
document.body.style.padding = "0";

// Create a div element with flexbox properties
const grid = document.createElement("div");
grid.classList.add("grid");

grid.style.border = "1px solid #000";
grid.style.margin = "0 auto";

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

