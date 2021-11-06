const container = document.querySelector('.container');

function change(e){
    e.target.style.backgroundColor = 'red';
}

// Creating rows and columns to form grid
function make_rows(num_rows){
    for(i = 0; i < num_rows; i ++){
        let row_div = document.createElement('div');
        row_div.classList.add('row_grid');
        container.append(row_div);
    }
}

function make_col(num_col){
    const rows = container.querySelectorAll('.row_grid');
    rows.forEach((row) => {
        for(j=0;j<num_col; j++){
            let col_div = document.createElement('div');
            col_div.classList.add('col_grid');
            col_div.addEventListener('mouseover', change); 
            row.append(col_div);
        }
    })
}

let current = 0;
function change_size(num){
    // Clears any existing grid first
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    make_rows(num);
    make_col(num);
    current = num;
}

const cells = document.querySelectorAll('col_grid');
const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', clear);
change_size(25);



function clear(){
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'black';
    });
}


