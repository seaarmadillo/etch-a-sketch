// Remove margin and padding from the body
document.body.style.margin = "0";
document.body.style.padding = "0";

// Create a div element with flexbox properties
const grid = document.createElement("div");
grid.classList.add("grid");

grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";


grid.style.width = "100vw";
grid.style.height = "100vh";


// Create div elements with flexbox properties

for (let i = 0; i < (window.innerWidth / 16) * (window.innerHeight / 16); i++) { 
    const item = document.createElement("div");
 
   
    item.style.border = "0px solid #000";
    item.style.boxSizing = "border-box";
    item.style.margin = "0";
    item.style.textAlign = "center";
    item.style.width = "16px"; 
    item.style.height = "16px"; 
    grid.appendChild(item);

//add hover effect
    item.addEventListener("mouseover",(e) => {
        item.style.backgroundColor = "#ffc7c0";
});

    grid.appendChild(item);
}
// Append the grid element to the body
document.body.appendChild(grid); 

