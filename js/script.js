// const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Визначити кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Усі пораховані результати вивести одним повідомленням за допомогою alert.

// Обчислення мають виконуватися в циклі, а не за допомогою методів масиву


const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.
let positiveSum = 0;
let positiveCount = 0;

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = numbers[0];
let maxElementIndex = 0;

// Визначити кількість негативних елементів.
let negativeCount = 0;

// Знайти кількість непарних позитивних елементів.
let oddPositiveCount = 0;

// Визначити кількість парних позитивних елементів.
let evenPositiveCount = 0;

// Знайти суму парних позитивних елементів.
let sumEvenPositive = 0;

// Знайти суму непарних позитивних елементів.
let sumOddPositive = 0;

// Знайти добуток позитивних елементів.
let positiveProduct = 1;

for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Знайти суму та кількість позитивних елементів.
    if (currentNumber > 0) {
        positiveSum += currentNumber;
        positiveCount++;
    }

    // Знайти максимальний елемент масиву та його порядковий номер.
    if (currentNumber > maxElement) {
        maxElement = currentNumber;
        maxElementIndex = i;
    }

    // Визначити кількість негативних елементів.
    if (currentNumber < 0) {
        negativeCount++;
    }

    // Знайти кількість непарних позитивних елементів.
    if (currentNumber > 0 && currentNumber % 2 !== 0) {
        oddPositiveCount++;
    }

    // Визначити кількість парних позитивних елементів.
    if (currentNumber > 0 && currentNumber % 2 === 0) {
        evenPositiveCount++;
        sumEvenPositive += currentNumber;
    }

    // Знайти суму непарних позитивних елементів.
    if (currentNumber > 0 && currentNumber % 2 !== 0) {
        sumOddPositive += currentNumber;
    }

    // Знайти добуток позитивних елементів.
    if (currentNumber > 0) {
        positiveProduct *= currentNumber;
    }
}

// Формування результатів для виведення через alert.
const resultsMessage =
    "Сума позитивних елементів: " + positiveSum + "\n" +
    "Кількість позитивних елементів: " + positiveCount + "\n" +
    "Максимальний елемент: " + maxElement + ", порядковий номер: " + maxElementIndex + "\n" +
    "Кількість негативних елементів: " + negativeCount + "\n" +
    "Кількість непарних позитивних елементів: " + oddPositiveCount + "\n" +
    "Кількість парних позитивних елементів: " + evenPositiveCount + "\n" +
    "Сума парних позитивних елементів: " + sumEvenPositive + "\n" +
    "Сума непарних позитивних елементів: " + sumOddPositive + "\n" +
    "Добуток позитивних елементів: " + positiveProduct;

// Вивести результати через alert.
alert(resultsMessage);
