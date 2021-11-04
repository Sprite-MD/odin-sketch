let container = document.querySelector('.container');
//let row = container.querySelectorAll('.row_grid');
let row = document.getElementsByClassName('row_grid')
let cell = document.querySelectorAll('col_grid')

function make_rows(num_rows){
    for(i = 0; i < num_rows; i ++){
        let row_div = document.createElement('div');
        row_div.classList.add('row_grid');
        container.append(row_div);
    }
    console.log(row.length)
}


function make_col(num_col){
    for(i=0;i<row.length; i++){
        for(j=0;j<num_col; j++){
            let col_div = document.createElement('div');
            col_div.classList.add('col_grid');
            row[j].append(col_div);
        }
    }
}


function size(num){
    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    make_rows(num);
    make_col(num);
}


size(1000);