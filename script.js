let container = document.querySelector('.container');

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


function size(num){
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    make_rows(num);
    make_col(num);
}


size(25);