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

let randomNumArr = generateFiveUniqueNumbers(1, 50, 5);

// CREAZONE E ASSEGNAZIONE CONTENUTO UL
const numList = document.getElementById("numbers-list");

function randomNumList() {
    for (let i = 0; i < randomNumArr.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = randomNumArr[i];
        numList.appendChild(listItem);
    }
}

randomNumList();

// COUNTDOWN
let seconds = 3;
const countdownDisplay = document.getElementById("countdown");
const answerInput = document.getElementById("answers-form");
const altText = document.getElementById("instructions");

countdownDisplay.innerText = seconds--;

const intervalId = setInterval(function () {
    if (seconds < 0) {
        countdownDisplay.classList.add("d-none");
        answerInput.classList.remove("d-none");
        numList.classList.add("d-none");
        altText.innerText = "Inserisci i numeri memorizzati"
    } else {
        countdownDisplay.innerText = seconds--;
    }
}, 1000);

// CHECK INPUT E VALIDAZIONE CON I NUMERI GENERATI
const userInput = document.querySelectorAll("input");
const myForm = document.getElementById("answers-form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let count = 0
    let correctNum = [];

    for (let i = 0; i < userInput.length; i++) {
        const userNum = parseInt(userInput[i].value);
        if (randomNumArr.includes(userNum)) {
            count++;
            correctNum.push(userNum);
        }
    }

    const message = document.getElementById("message");

    if (count === 0) {
        message.textContent = "Non hai indovinato nessun numero";
    } else if (count === userInput.length) {
        message.textContent = "Ottimo! Hai indovinato tutti i numeri";
    } else {
        message.textContent = `Hai indovinato ${count} numero/i: ${correctNum.join(", ")}`;
    }
});




















