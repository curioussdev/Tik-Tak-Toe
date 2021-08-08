// Initial Data
let square = {
    a1: 'x', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: 'o', c3: ''
};

let player = '';
let warning = '';
let playing = false;

reset();

// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});

// Functions
function itemClick(event) {
    let item = event.target.getAttribute('data-item');
    if(square[item] === '') {
        square[item] = player;
        renderSquare();
        switchPlayer();
    }
};

function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    // player = (random === 0) ? 'x' : 'o';
    // ou    
    if(random === 0) {
        player = 'x';
    } else {
        player = 'o';
    };

    for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();


    checkGame();
};

function renderSquare() {
    for(let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i]
    };
};

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML= warning;
};

function switchPlayer() {
    if(player === 'x') {
        player = 'o';
    } else {
        player = 'x';
    };
    renderInfo();
};


function checkGame(){
    if(checkWinnerFor('x')) {
        warning = 'O "x" venceu';
        playing = false;
    } else if(checkWinnerFor('o')) {
        warning = 'O "o" venceu';
        playing = false;
    } else if(isFull()) {
        warning = 'Deu empate';
        playing = false;
    };
};

function checkWinnerFor(player){
    let possib = [ // let possibilidades
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];
    for(let possibItem in possib){
        let pArray = possib[possibItem].split(',') // array para dar loop nas possib
        let hasWon = pArray.every(option =>  square[option] === player);
        if(hasWon) {
            return true;
        }
    
    }
    return false;
    
};

function isFull(){
    for(let i in square) {
        if(square[i] === ''){
            return false;
        }
    }
    return true;
};