const ampm = document.getElementById("ampm");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let prevMin = null;
let prevHour = null;

const updateClock = () => {
    const now = new Date();
    let hh = (now.getHours() % 12) || 12;
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
        changeAMPM(now.getHours());
        prevHour = hh;
    }
};

setInterval(updateClock, 1000);

const changeAMPM = (hour) => {
    setTimeout(() => {
        let ampmText = (hour >= 12) ? 'PM' : 'AM';
        ampm.textContent = ampmText;
    }, 400);    
};

const flipCard = (timeElement, time) => {
    const nextTop = timeElement.querySelector('.next.top');
    const nextBottom = timeElement.querySelector('.next.bottom');
    const prevTop = timeElement.querySelector('.prev.top');
    const prevBottom = timeElement.querySelector('.prev.bottom');
    
    updateTime(nextTop, time);
    prevTop.classList.add('flip');

    setTimeout(() => {
        updateTime(prevTop, time);
        updateTime(nextBottom, time);
        nextBottom.classList.add('flip');
    }, 400);

    setTimeout(() => {
        updateTime(prevBottom, time);
        nextBottom.classList.remove('flip');
        prevTop.classList.remove('flip');
        swapCard(prevTop, prevBottom, nextTop, nextBottom);
    }, 900);
};

const updateTime = (cardElement, time) => {
    cardElement.querySelector('.num').textContent = time;
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
};