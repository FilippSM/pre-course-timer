let timerId; // переменная, которая будет хранить ID таймера
let flag = false;

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (!flag) {
        timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
        flag = true;
    }
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); // останавливаем таймер
    flag = false;
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
