// Initial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let player = '';

let warning = '';

let playing = false;



// Events
document.querySelector('.reset').addEventListener('click', reset);


// Functions
function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    if(random === 0) {
        player = 'x';
    } else {
        player = '0';
    };
    //ou

    // player = (random === 0) ? 'x' : 'o';
};