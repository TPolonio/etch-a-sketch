const grid =  document.querySelector('.container')

//For loop to had squares:

let k = 0

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = ++k
    grid.appendChild(square);
}