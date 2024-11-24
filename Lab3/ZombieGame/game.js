let currentIdx = 0;
let zombieIdx = 0;
let lastChangeTime = 0;
let points = 0;
let health = 3;
let player = new Audio("resources/sad-music.mp3");
const interval = 20;
const START_POS = 89;
const KILL_PTS = 25;
const MISS_PTS = -5

mobs = [];
mobsSpeed = [];
mobsHorPos = [];

let myInterval = setInterval(main, 1000);
requestAnimationFrame(animate);

document.getElementById('reset_button').addEventListener("click", (event) => {
    health = 3;
    points = 0;
    player.pause();
    player.currentTime = 0;
    updateHealth();
    updatePoints(-points);
    myInterval = setInterval(main, 1000);
    requestAnimationFrame(animate);
    document.getElementById('gameover_panel').style.display = "none";
});
document.getElementById('main_field').addEventListener("click", (event) => {updatePoints(MISS_PTS)})

function main() {
    if (health > 0) {
        addZombie();
    }
}

function animate(timestamp) {
    if (timestamp - lastChangeTime >= interval) {
        currentIdx = (currentIdx + 1) % 10;
        for (let i = 0; i < mobs.length; i++) {
            mobs[i].src = "./resources/zombie" + currentIdx.toString() + ".png";
            mobs[i].style.marginLeft = mobsHorPos[i].toString() + "%";
            mobsHorPos[i] -= mobsSpeed[i];
            if (mobsHorPos[i] < -10) {
                if (health > 0) {
                    health--;
                } 

                zombieHandler(mobs[i].id, 0);
                updateHealth();
            }

            if (health == 0) {
                gameOver();
                return;
            }
        }
        lastChangeTime = timestamp;
    }

    requestAnimationFrame(animate);
}

function addZombie() {
    let zombie = document.createElement("img");
    zombie.src = "./resources/zombie0.png";
    zombie.id = "zombie" + zombieIdx;
    zombie.style.marginTop =  drawPosition().toString() + "%";
    zombie.style.marginLeft = START_POS.toString() + "%";
    zombie.style.position = "absolute";
    zombie.style.width = drawSize() + "px";
    zombie.style.height = "auto";
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
    updatePoints(change);

    let idxToRemove = 0;
    for (let i = 0; i < mobs.length; i++) {
        if (mobs[i].id == zombieID) {
            idxToRemove = i;
            break;
        }
    }

    mobs.splice(idxToRemove, 1);
    mobsSpeed.splice(idxToRemove, 1);
    mobsHorPos.splice(idxToRemove, 1);
    removeZombie(zombieID);
}

function updateHealth() {
    let children = document.getElementById('life_container').children;
    for (let i = 0; i < health; i++) {
        children[i].src = "resources/full_heart.png";
    }

    for (let i = health; i < children.length; i++) {
        children[i].src = "resources/empty_heart.png";
    }
}

function updatePoints(change) {
    points += change;
    document.getElementById('score_count').textContent = pointsToStr(points);
}

function gameOver() {
    clearInterval(myInterval);
    player.currentTime = 0;
    player.play();
    player.loop = true;
    
    remainingZombie = [];

    for (let i = 0; i < mobs.length; i++) {
        remainingZombie.push(mobs[i].id);
    }

    for (let i = 0; i < remainingZombie.length; i++) {
        zombieHandler(remainingZombie[i], 0);
    }

    mobs = [];
    mobsSpeed = [];
    mobsHorPos = [];

    currentIdx = 0;
    zombieIdx = 0;
    lastChangeTime = 0;

    showPanel();
}

function showPanel() {
    document.getElementById('gameover_panel').style.display = "block";
    document.getElementById('final_score').textContent = pointsToStr(points) + " points";
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
    return Math.random() * 1.25 + 0.1;
}

function drawPosition() {
    return Math.random() * 24;
}

function drawSize() {
    return Math.random() * 100 + 150;
}