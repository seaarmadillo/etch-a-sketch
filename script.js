// Create a div element with flexbox properties
const grid = document.createElement("div");
grid.classList.add("grid");
grid.textContent = "this will have a grid";

grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";

grid.style.backgroundColor = "#f9cbdd";
grid.style.border = "1px #d18ca6 solid";
grid.style.width = "100%";
grid.style.height = "200px";



// Append the grid element to the body
document.body.appendChild(grid);



