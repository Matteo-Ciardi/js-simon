// GENERATORE DI 5 NUMERI CASUALI (10, 50)
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

console.log(generateFiveUniqueNumbers(10, 50, 5));








