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

function randomNumList() {
    const numList = document.getElementById("numbers-list");

    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement("li");

        numList.appendChild(listItem);

        listItem.textContent = generateFiveUniqueNumbers(1, 50, 1);
    }
}

randomNumList();









