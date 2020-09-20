const ROWS = 20;
const CELLS = 20;
let arr = [];
let turn = 1;

function drawGameBoard() {
    let html = '';
    for (let i = 0; i < ROWS; i++) {
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < CELLS; j++) {
            arr[i][j] = "*";
            html += '<td id="cell-' + i + '-' + j + '" onclick="play(' + i + ',' + j + ')">';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function play(x, y) {
    if (turn === 1) {
        arr[x][y] = 'X';
        document.getElementById('cell-' + x + '-' + y).innerHTML = 'X'
        turn = 2;
    } else {
        document.getElementById('cell-' + x + '-' + y).innerHTML = 'O'
        turn = 1;
        arr[x][y] = 'O';
    }
    checkWinNgang(x, y);
    checkWinDoc(x, y);
    checkWinCheo1(x,y);
    checkWinCheo2(x,y);
}

function checkWinNgang(x, y) {
    let count = 1;
    let i = 1;
    while (y - i >= 0 && arr[x][y -i] === arr[x][y]) {
        count++;
        i++;
    }
    let j = 1;
    while (y + j <= CELLS && arr[x][y + j] === arr[x][y]) {
        count++;
        j++;
    }
    if (isGameOver(count)) {
        alert("win");
    }
}
function checkWinDoc(x,y){
    let count = 1;
    let i = 1;
    while (x - i >= 0 && arr[x-i][y] === arr[x][y]) {
        count++;
        i++;
    }
    let j = 1;
    while (x + j <= ROWS && arr[x+j][y] === arr[x][y]) {
        count++;
        j++;
    }
    if (isGameOver(count)) {
        alert("win");
    }
}
function checkWinCheo1(x,y){
    let count = 1;
    let i = 1;
    while (x - i >= 0 && y - i >= 0 && arr[x-i][y-i] === arr[x][y]) {
        count++;
        i++;
    }
    let j = 1;
    while (x + j <= ROWS && y + j <= CELLS && arr[x+j][y+j] === arr[x][y]) {
        count++;
        j++;
    }
    if (isGameOver(count)) {
        alert("win");
    }
}
function checkWinCheo2(x,y){
    let count = 1;
    let i = 1;
    while (x - i >= 0 && y + i <= CELLS && arr[x-i][y+i] === arr[x][y]) {
        count++;
        i++;
    }
    let j = 1;
    while (x + j <= ROWS && y - j >= 0 && arr[x+j][y-j] === arr[x][y]) {
        count++;
        j++;
    }
    if (isGameOver(count)) {
        alert("win");
    }
}

function isGameOver(number) {
    return number === 5;
}


drawGameBoard();
