const griddy = document.querySelector('.griddy');
const bottom = document.createElement('div');
const rainbow = document.createElement('button');
const clear = document.createElement('button');
const boxcount = document.createElement('input');
const darky = document.createElement('button')
const body = document.body;

let square_toggle = false;
let rb_toggle = false;
let dark_toggle = false;
let painter = 'black';
const BODCOL = `rgb(182, 53, 2)`;
let col = 'white'
let bcol = BODCOL;

griddy.addEventListener('mousedown', () => square_toggle = true);
griddy.addEventListener('mouseup', () => square_toggle = false);

clear.classList.add('rainbow');
clear.innerHTML = "Clear Grid";
clear.addEventListener('click', () => {
    let grid_all = griddy.querySelectorAll("*")
    dark_toggle ? col = 'black' : {}; 
    grid_all.forEach((element) => element.style.backgroundColor = col);
})

darky.classList.add('rainbow');
darky.innerHTML = 'Dark Mode';
darky.addEventListener('click', () => {
    if (dark_toggle) {
        dark_toggle = false; 
        darky.innerHTML = 'Dark Mode';
        col = 'white'; 
        painter = 'black';
        bcol = BODCOL;
        griddy.style.borderColor = 'black';
    } else {
        dark_toggle = true; 
        darky.innerHTML = 'Light Mode';
        col = 'black';
        bcol = 'grey';
        griddy.style.borderColor = 'white';
        painter = 'white';
    }

    let grid_all = griddy.querySelectorAll("*")
    grid_all.forEach((element) => {
        element.style.backgroundColor = col;
    });

    body.style.backgroundColor = bcol;
})

rainbow.classList.add("rainbow")
rainbow.style.cssText = `color: ${randcol()}; background-color: ${randcol()}`;
rainbow.innerHTML = 'Rainbow';
rainbow.addEventListener('click', () => {
    if (rb_toggle===false) {
        rb_toggle = true; rainbow.innerHTML = 'Normal';
        //rainbow.classList.add('rainbow');
        rainbow.style.cssText = `color: rgb(0, 0, 0);
        background-color: rgb(255, 255, 255)`;
    } else {
        rb_toggle = false; rainbow.innerHTML = 'Rainbow';
        rainbow.style.cssText = `color: ${randcol()};
        background-color: ${randcol()}`;
    }
})


boxcount.classList.add("rainbow");
boxcount.value = 'Enter Grid Resolution'
boxcount.addEventListener({}, () => {

})
bottom.appendChild(clear)
bottom.appendChild(rainbow)
bottom.appendChild(darky)
document.body.appendChild(bottom);
bottom.style.gap = '60px';


let boxes = 100;
for (let i = 1; i <= boxes; i++) {
	let row = document.createElement('div');
    for (let k = 1; k <= boxes; k++) {
        let column = document.createElement('div');
        column.classList.add("square")
        column.style.Height = (800/boxes)+'px'
        row.appendChild(column)    
        column.addEventListener('mouseover', () => {
            rb_toggle==true ? painter = randcol() : {}; //painter = col;
            square_toggle==true ? column.style.backgroundColor = painter : {};
        })        
    }    
	griddy.appendChild(row);
}

function randcol() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

/* function darkmode(xcol) {
    let temp = xcol.split(/[(),]/);
    temp[1] = 255 - temp[1]
    temp[2] = 255 - temp[2]
    temp[3] = 255 - temp[3]

    return 'rgb('+temp.slice(1,4).join()+')'
} */
