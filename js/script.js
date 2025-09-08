// GENERATORE DI 5 NUMERI CASUALI (1, 50)

// FUNZIONE PER GENERARE UN NUMERO
function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE PER CONTROLLARE SE IL NUMERO EISTE IN UN ARRAY, SE SI, NE GENERA UN ALTRO
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

let randomNumArr = generateFiveUniqueNumbers(1, 50, 5); //variabile con funzione assegnata

// CREAZONE E ASSEGNAZIONE CONTENUTO UL
const numList = document.getElementById("numbers-list");

// FUNZIONE PER CREARE UN ELEMENTO LI ED ASSEGNARGLI UNO DEI NUMERI RANDOM
function randomNumList() {
    for (let i = 0; i < randomNumArr.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = randomNumArr[i];
        numList.appendChild(listItem);
    }
}

randomNumList();

// COUNTDOWN
let seconds = 30;
const countdownDisplay = document.getElementById("countdown");
const answerInput = document.getElementById("answers-form");
const altText = document.getElementById("instructions");

countdownDisplay.innerText = seconds--; // mostra i secondi che scendono

// FA PARTIRE IL COUNTDOWN E ALLA FINE ESEGUE I COMANDI CHE SONO NELL'IF
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

// EVENTO CHE FA PARTIRE LA VALIDAZIONE AL MOMENTO DELL'INVIO 
myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let count = 0
    let correctNum = [];

    // CICLO CHE CONTROLLA SE I NUMERI INSERITI CORRISPONDONO A QUELLI GENERATI
    for (let i = 0; i < userInput.length; i++) {
        const userNum = parseInt(userInput[i].value); //converto l'input in numero e lo salvo in una variabile
        if (randomNumArr.includes(userNum)) {
            count++;
            correctNum.push(userNum);
        }
    }

    // STAMPA MESSAGGIO IN BASE ALL'ESITO DELLA VALIDAZIONE
    const message = document.getElementById("message");

    if (count === 0) {
        message.textContent = "Non hai indovinato nessun numero";
    } else if (count === userInput.length) {
        message.textContent = "Ottimo! Hai indovinato tutti i numeri";
    } else {
        message.textContent = `Hai indovinato ${count} numero/i: ${correctNum.join(", ")}`;
    }
});

// FINE




















