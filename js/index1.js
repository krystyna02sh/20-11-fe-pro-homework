
const num1String = prompt("Введіть перше число:");
const num1 = Number(num1String);
const operator = prompt("Введіть функцію яку хочете зробити + - * / ");
const num2String = prompt("Введіть друге число:");
const num2 = Number(num2String);
if (isNaN(num1) || isNaN(num2) || !num1String?.trim() || !num2String?.trim()) {
    alert("Введено нечислове значення або скасовано.");
} else {
    if (operator === "+") {

        const sum = num1 + num2;
        alert(sum)
    }
    else if (operator === "-") {

        const sum = num1 - num2
        alert(sum)

    }
    else if (operator === "*") {

        const sum = num1 * num2
        alert(sum)
    }
    else if (operator === "/") {
        const sum = num1 / num2
        if (num2 === 0) {
            alert('Помилка: ділення на 0')
        }
        else {
            alert(sum)
        }

    }
    else {
        alert("Помилка при виборі функції.")
    }
}




