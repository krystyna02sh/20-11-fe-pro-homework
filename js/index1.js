
const num1String = prompt("Введіть перше число:");
const num1 = Number(num1String);
const operator = prompt("Введіть функцію яку хочете зробити + - * / ");
const num2String = prompt("Введіть друге число:");
const num2 = Number(num2String);
if (isNaN(num1) || num1String === null || num1String.trim() === "") {
    console.log("Введено нечислове значення або скасовано.");
} else {
    console.log("Введено число:", num1);
}
if (isNaN(num2) || num2String === null || num2String.trim() === "") {
    console.log("Введено нечислове значення або скасовано.");
} else {
    console.log("Введено число:", num2);
}

if (operator === "+") {

    const sum = num1 + num2;
    console.log(sum)
}
else if (operator === "-") {

    const sum = num1 - num2
    console.log(sum)

}
else if (operator === "*") {

    const sum = num1 * num2
    console.log(sum)
}
else if (operator === "/") {

    const sum = num1 / num2
    console.log(sum)
    if (num2 === 0) {
        console.log('Помилка: ділення на 0')
    }

}
else {
    console.log("Помилка при виборі функції.")
}