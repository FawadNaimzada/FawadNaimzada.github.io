document.getElementById('left').addEventListener('click', slideLeft);
document.getElementById('right').addEventListener('click', slideRight);

function slideRight() {
    let temp = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = temp;
}

function slideLeft() {
    let temp = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = temp;
}


let timer1;
let timer2;

function slideLeftAuto() {

    clearInterval(timer1);
    clearInterval(timer2);

    timer1 = setInterval(slideLeft, 5000);
    slideLeft();
}

function slideRightAuto() {

    clearInterval(timer1);
    clearInterval(timer2);

    timer2 = setInterval(slideRight, 5000);
    slideRight();
}