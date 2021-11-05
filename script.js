let container = document.querySelector('.container');

// Creating rows and columns to form grid
function make_rows(num_rows){
    for(i = 0; i < num_rows; i ++){
        let row_div = document.createElement('div');
        row_div.classList.add('row_grid');
        container.append(row_div);
    }
}


function make_col(num_col){
    let rows = container.querySelectorAll('.row_grid');
    rows.forEach((row,i) => {
        for(j=0;j<num_col; j++){
            let col_div = document.createElement('div');
            col_div.classList.add('col_grid');
            row.append(col_div);
        }
    })
}


function change_size(num){
    // Clears any existing grid first
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    make_rows(num);
    make_col(num);
}

change_size(25);

let cell = document.querySelector('.col_grid');

cell.addEventListener('mouseenter', e =>{
    e.style.backgroundColor = 'orange';
});


