const ampm = document.getElementById("ampm");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let prevMin = null;
let prevHour = null;

const updateClock = () => {
    const now = new Date();

    let ampmText = (now.getHours() >= 12) ? 'PM' : 'AM';
    ampm.textContent = ampmText;
    
    let hh = ( now.getHours() % 12) || 12;
    hh = hh.toString().padStart(2, '0');

    const mm = now.getMinutes().toString().padStart(2, '0');
    const ss = now.getSeconds().toString().padStart(2, '0');
    flipCard(second, ss);

    if (mm !== prevMin) {
        flipCard(minute, mm);
        prevMin = mm;
    }

    if (hh !== prevHour) {
        flipCard(hour, hh);
        prevHour = hh;
    }
}

setInterval(updateClock, 1000);


const flipCard = (timeElement, time) => {
    const nextTop = timeElement.querySelector('.next.top');
    const nextBottom = timeElement.querySelector('.next.bottom');
    const prevTop = timeElement.querySelector('.prev.top');
    const prevBottom = timeElement.querySelector('.prev.bottom');
    
    nextTop.querySelector('.num').textContent = time;
    prevTop.classList.add('flip');

    setTimeout(() => {
        prevTop.querySelector('.num').textContent = time;
        nextBottom.querySelector('.num').textContent = time;
        nextBottom.classList.add('flip');
    }, 400);

    setTimeout(() => {
        prevBottom.querySelector('.num').textContent = time;
        nextBottom.classList.remove('flip');
        prevTop.classList.remove('flip');
        swapCard(prevTop, prevBottom, nextTop, nextBottom);
    }, 900);
};

const swapCard = (prevTop, prevBottom, nextTop, nextBottom) => {
    prevTop.classList.remove('prev');
    prevTop.classList.add('next');
    prevBottom.classList.remove('prev');
    prevBottom.classList.add('next');

    nextTop.classList.remove('next');
    nextTop.classList.add('prev');
    nextBottom.classList.remove('next');
    nextBottom.classList.add('prev');
}