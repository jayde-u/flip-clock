const ampm = document.getElementById("ampm");
const hour = document.getElementById("hour-text");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const updateClock = () => {
    const now = new Date();
    let ampmString = 'AM';
    let hourString = '00';

    const currentHour = now.getHours();
    const currentMin = now.getMinutes().toString().padStart(2, '0');
    const currentSec = now.getSeconds().toString().padStart(2, '0');

    if (currentHour >= 12) {
        ampmString = 'PM';
        hourString = currentHour % 12;
        if (hourString == 0) hourString = 12;
        hourString = hourString.toString().padStart(2, '0');
    }
    
    ampm.textContent = ampmString;
    hour.textContent = hourString;
    minute.textContent = currentMin;
    second.textContent = currentSec;
}

updateClock();
setInterval(updateClock, 1000);
// or 60초에 한 번 업데이트? 매초 업데이트하는거보다 시간 단위가 낫나?
