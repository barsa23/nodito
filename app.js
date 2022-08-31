const BULLRICH = "bullrich";
const MACRI = "macri";
const CRISTINA = "cristina";
const MILEI = "milei";
const MYRIAM = "myriam";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const bullrichBtn = document.getElementById("bullrich");
const macriBtn = document.getElementById("macri");
const cristinaBtn = document.getElementById("cristina");
const mileiBtn = document.getElementById("milei");
const myriamBtn = document.getElementById("myriam");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

bullrichBtn.addEventListener("click", () => {
    play(BULLRICH);
});
macriBtn.addEventListener("click", () => {
    play(MACRI);
});
cristinaBtn.addEventListener("click", () => {
    play(CRISTINA);
});
mileiBtn.addEventListener("click", () => {
    play(MILEI);
});
myriamBtn.addEventListener("click", () => {
    play(MYRIAM);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Eligiendo!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 100);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Empate técnico!!!";
                break;
            case WIN:
                resultText.innerHTML = "Ganaste las elecciones sos presidentx de ARG";
                break;
            case LOST:
                resultText.innerHTML = "Perdiste las elecciones loser !";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 5);
    switch (number) {
        case 0:
            return BULLRICH;
        case 1:
            return MACRI;
        case 2:
            return CRISTINA;
        case 3:
            return MILEI;
        case 4:
            return MYRIAM;

    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === BULLRICH) {

        if (machineOption === MACRI) return LOST;
        if (machineOption === CRISTINA) return LOST;
        if (machineOption === MILEI) return WIN;
        if (machineOption === MYRIAM) return LOST;

    } else if (userOption === MACRI) {

        if (machineOption === CRISTINA) return LOST;
        if (machineOption === BULLRICH) return WIN;
        if (machineOption === MILEI) return WIN;
        if (machineOption === MYRIAM) return LOST;

    } else if (userOption === CRISTINA) {

        if (machineOption === BULLRICH) return WIN;
        if (machineOption === MACRI) return WIN;
        if (machineOption === MILEI) return WIN;
        if (machineOption === MYRIAM) return LOST;

    }

    else if (userOption === MILEI) {

    if (machineOption === BULLRICH) return WIN;
    if (machineOption === MACRI) return WIN;
    if (machineOption === CRISTINA) return LOST;
    if (machineOption === MYRIAM) return LOST;

    }

    else if (userOption === MYRIAM) {

    if (machineOption === BULLRICH) return WIN;
    if (machineOption === MACRI) return LOST;
    if (machineOption === CRISTINA) return LOST;
    if (machineOption === MILEI) return WIN;

}




}