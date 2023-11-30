
const num1String = prompt("Введіть перше число:");
const num1 = Number(num1String);
const operator = prompt("Введіть функцію яку хочете зробити + - * / ");
const num2String = prompt("Введіть друге число:");
const num2 = Number(num2String);
if (!isNaN(num1) || num1 !== "") {
    console.log("Введено число:", num1);
} else {
    console.log("Введено нечислове значення або скасовано.");
}
if (!isNaN(num2) || num2 !== "") {
    console.log("Введено число:", num2);
} else {
    console.log("Введено нечислове значення або скасовано.");
}

if (operator === "+") {
    console.log("Обрано функцію:додавання")
    const sum = num1 + num2;
    console.log(sum)
}
if (operator === "-") {
    console.log("Обрано функцію: віднімання")
    const sum = num1 - num2
    console.log(sum)

}
if (operator === "*") {
    console.log("Обрано функцію: множення")
    const sum = num1 * num2
    console.log(sum)
}
if (operator === "/") {
    console.log("Обрано функцію: ділення")
    const sum = num1 / num2
    console.log(sum)
    if (num2 === 0) {
        console.log('Помилка: ділення на 0')
    }
}