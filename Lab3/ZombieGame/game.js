let currentIdx = 0;
let zombieIdx = 0;
let lastChangeTime = 0;
let points = 0
const interval = 50;
const START_POS = 89;
const KILL_PTS = 20;

mobs = [];
mobsSpeed = [];
mobsHorPos = [];

function main() {
    addZombie();
}

setInterval(main, 2000);

function animate(timestamp) {
    if (timestamp - lastChangeTime >= interval) {
        currentIdx = (currentIdx + 1) % 10;
        for (let i = 0; i < mobs.length; i++) {
            mobs[i].src = "./resources/zombie" + currentIdx.toString() + ".png";
            mobs[i].style.marginLeft = mobsHorPos[i].toString() + "%";
            mobsHorPos[i] -= mobsSpeed[i];
            if (mobsHorPos[i] < -10) {
                zombieHandler(mobs[i].id, 0);
            }
        }
        lastChangeTime = timestamp;
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function addZombie() {
    let zombie = document.createElement("img");
    zombie.src = "./resources/zombie0.png";
    zombie.id = "zombie" + zombieIdx;
    zombie.style.marginTop =  drawPosition().toString() + "%";
    zombie.style.marginLeft = START_POS.toString() + "%";
    zombie.style.position = "absolute";
    zombie.addEventListener("click", (event) => {
        zombieHandler(zombie.id, KILL_PTS);
    });
    zombieIdx++;

    mobsSpeed.push(drawSpeed());
    mobsHorPos.push(START_POS);
    mobs.push(zombie);
    document.getElementById('main_field').appendChild(zombie);
}

function removeZombie(zombieID) {
    document.getElementById('main_field').removeChild(document.getElementById(zombieID));
}

function zombieHandler(zombieID, change) {
    points += change;
    document.getElementById('score_count').textContent = pointsToStr(points);

    let idxToRemove = 0;
    for (let i = 0; i < mobs.length; i++) {
        if (mobs[i].id === zombieID) {
            idxToRemove = i;
            break;
        }
    }

    mobs.splice(idxToRemove, 1);
    mobsSpeed.splice(idxToRemove, 1);
    mobsHorPos.splice(idxToRemove, 1);
    removeZombie(zombieID);
}

function pointsToStr(points) {
    let len = points.toString().length;
    let zeros = 5 - len;

    let result = "";

    if (points < 0) {
        result += "-";
        points *= -1;
        zeros++;
    }

    for (let i = 0; i < zeros; i++) {
        result += "0";
    }

    result += points.toString();
    return result;
}

function drawSpeed() {
    return Math.random() * 1.75 + 0.25;
}

function drawPosition() {
    return Math.random() * 24;
}