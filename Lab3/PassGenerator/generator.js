function generatePassword() {
    let minLen = document.getElementById('minLen').value;
    let maxLen = document.getElementById('maxLen').value;
    let largeON = document.getElementById('largeLetters').checked;
    let specialON = document.getElementById('specialLetters').checked;

    const validLen = /^[1-9][0-9]*$/

    if (!minLen.match(validLen)) {
        alert("Incorrect minimum length given");
        return;
    }

    if (!maxLen.match(validLen)) {
        alert("Incorrect maximum length given");
        return;
    }

    if (minLen > maxLen) {
        alert("Minimum length bigger than maximum length");
        return;
    }

    minLen = Number(minLen);
    maxLen = Number(maxLen);

    let actualLen = Math.floor(Math.random() * (maxLen - minLen) + minLen);
    let password = "";

    for (let i = 0; i < actualLen; i++) {
        password += String.fromCharCode(drawCharacter(largeON, specialON));
    }

    alert(password);
}

function drawCharacter(largeON, specialON) {
    let randChar = -1;

    if (specialON && largeON) {
        randChar = Math.floor(Math.random() * (126 - 33) + 33);
    } else if (!specialON && largeON) {
        let whichInterval = Math.random() < 0.5 ? 0 : 1
        if (whichInterval == 1) {
            randChar = Math.floor(Math.random() * (122 - 97) + 97);
        } else {
            randChar = Math.floor(Math.random() * (90 - 65) + 65);
        }
    } else if (specialON && !largeON) {
        let whichInterval = Math.random() < 0.5 ? 0 : 1
        if (whichInterval == 1) {
            randChar = Math.floor(Math.random() * (126 - 91) + 91);
        } else {
            randChar = Math.floor(Math.random() * (64 - 33) + 33);
        }
    } else {
        randChar = Math.floor(Math.random() * (122 - 97) + 97);
    }

    return randChar;
}