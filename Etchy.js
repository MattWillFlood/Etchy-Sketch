const griddy = document.querySelector('.griddy');
let box_rows = 40;
let box_cols = 40; 
let square_toggle = false;
// const gwidth = window.getComputedStyle(griddy);
// let gridx = gwidth.getPropertyValue("width");
// let square_width = Math.floor((gridx.split('px')[0]-20)/box_cols) + 'px';

for (let i = 1; i <= box_rows; i++) {
	let row = document.createElement('div');
    row.classList.add("row")
    for (let k = 1; k <= box_cols; k++) {
        let column = document.createElement('div');
        column.classList.add("square")
        row.appendChild(column)    

        column.addEventListener('mouseover', () => {
            square_toggle==true ? column.style.backgroundColor = 'black' : {};
        })
        
    }    
	griddy.appendChild(row);
}

griddy.addEventListener('mousedown', () => {
    square_toggle = true;
})

griddy.addEventListener('mouseup', () => {
    square_toggle = false;
})
