// GENERATORE DI 5 NUMERI CASUALI (1, 50)
function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFiveUniqueNumbers(min, max, count) {
    const numbers = [];

    while (numbers.length < count) {
        let randomNum = randomNumGen(min, max);

        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers;
}

// CREAZONE E ASSEGNAZIONE CONTENUTO UL
const numList = document.getElementById("numbers-list");

function randomNumList() {
    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement("li");

        numList.appendChild(listItem);

        listItem.textContent = generateFiveUniqueNumbers(1, 50, 1);
    }
}

randomNumList();

// COUNTDOWN
let seconds = 5;
const countdownDisplay = document.getElementById("countdown");
const answerInput = document.getElementById("answers-form");

countdownDisplay.innerText = seconds--;

const intervalId = setInterval(function () {
    if (seconds < 0) {
        countdownDisplay.classList.add("d-none");
        answerInput.classList.remove("d-none");
        numList.classList.add("d-none");
    } else {
        countdownDisplay.innerText = seconds--;
    }
}, 1000);















