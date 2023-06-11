const gridContainer = document.querySelector('.grid-container')
const sizeButton = document.querySelector('.size-button')
let squares = 16

updateGrid(squares);

draw();

sizeButton.addEventListener('click', () => {
    squares = prompt('Number of squares per side (no more than 100)')
    updateGrid(squares);
    draw();
})


function updateGrid(size) {
    if (size <= 100) {
        removeAllChildNodes(gridContainer)
        for (i = 1; i <= (size * size); i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            gridContainer.appendChild(div);
            gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        }
    } else {
        alert("Too many squares!")
    }
    
}

function draw() {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach(div => {
        div.addEventListener('mouseover', function (e) {
            e.stopPropagation();
            e.target.style.background = 'black';
        })
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}