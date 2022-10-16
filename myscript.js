const container =  document.querySelector('.container')

//For loop to add squares:

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square')

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




    



