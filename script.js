const container = document.querySelector('.container');

function change(e){
    e.target.style.backgroundColor = 'red';
}

// Creating rows and columns to form grid
function make_grid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(i=0;i<= size*size;i++){
        const grid = document.createElement('div');
        grid.classList.add('cells')
        grid.addEventListener('mouseover', change);
        container.append(grid);
    }
}
make_grid(16);

function change_size(size){
    while(container.firstChild){
        container.remove(container.lastChild);
    }
    make_grid(size);
}

change_size(50);




