let myTimeout;
let min = 0;
let sec = 0;

function startWatch() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }

    if (min === 0) {
        document.getElementById('stoper_screen').innerHTML = sec + ' s';
    } else {
        document.getElementById('stoper_screen').innerHTML = min + ' min ' + sec + ' s';
    }
    
    myTimeout = setTimeout(startWatch, 1000);
    document.getElementById('start_button').disabled = true;
}

function stopWatch() {
    document.getElementById('start_button').disabled = false;
    clearTimeout(myTimeout);
}

function resetWatch() {
    min = 0;
    sec = 0;
    stopWatch();
    document.getElementById('stoper_screen').innerHTML = '0 s';
}