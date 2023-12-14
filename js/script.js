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


const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const positiveNumbers = numbers.filter(num => num > 0);

const sumOfPositives = positiveNumbers.reduce((acc, num) => acc + num, 0);
const countOfPositives = positiveNumbers.length;
const maxElement = Math.max(...numbers);
const indexOfMaxElement = numbers.indexOf(maxElement);
const countOfNegatives = numbers.filter(num => num < 0).length;
const countOfOddPositives = positiveNumbers.filter(num => num % 2 !== 0).length;
const countOfEvenPositives = positiveNumbers.filter(num => num % 2 === 0).length;
const sumOfEvenPositives = positiveNumbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
const sumOfOddPositives = positiveNumbers.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
const productOfPositives = positiveNumbers.reduce((acc, num) => acc * num, 1);
alert(`Сума позитивних елементів: ${sumOfPositives}
Кількість позитивних елементів: ${countOfPositives}
Максимальний елемент: ${maxElement} (під індексом ${indexOfMaxElement})
Кількість негативних елементів: ${countOfNegatives}
Кількість непарних позитивних елементів: ${countOfOddPositives}
Кількість парних позитивних елементів: ${countOfEvenPositives}
Сума парних позитивних елементів: ${sumOfEvenPositives}
Сума непарних позитивних елементів: ${sumOfOddPositives}
Добуток позитивних елементів: ${productOfPositives}`);
