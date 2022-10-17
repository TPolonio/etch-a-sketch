const container =  document.querySelector('.container');
const button = document.querySelector('.button');

//For loop to add squares:
document.documentElement.style.setProperty("--columns-row", 16);
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}


squares = document.querySelectorAll('.square')
hover();



button.addEventListener('click',(e)=>{
    let gridSize = prompt('Number of squares per column?' , '16');
        resetGrid();
        newGrid(gridSize);
            squares.forEach(square => {
            square.addEventListener('mouseover', (e) =>{
            square.style.backgroundColor = 'crimson'
        });

        square.addEventListener('mouseout', (e) =>{
        setTimeout(function(){ 
            square.style.backgroundColor = 'white'
        },1000)
            });
});
    } 
,)



function hover() {
    squares.forEach(square => {
    square.addEventListener('mouseover', (e) =>{
        square.style.backgroundColor = 'crimson'
        });

    square.addEventListener('mouseout', (e) =>{
        setTimeout(function(){ 
            square.style.backgroundColor = 'white'
        },1000)
            });
});
}


function resetGrid () {
    for (let i = container.childNodes.length - 1; i >= 0; i--) {
        container.removeChild(container.childNodes[i]);
         }
}

function newGrid(gridSize) {
    document.documentElement.style.setProperty("--columns-row", gridSize);
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        squares = document.querySelectorAll('.square')
        hover();

    }

}
    



