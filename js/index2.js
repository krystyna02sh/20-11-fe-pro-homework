// Юзер вводить число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь.
// Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.
const user_input = prompt("Введіть число:");
const number = parseFloat(user_input);

if (!isNaN(number) && number > 0) {
    let power = 0;
    let result = 1;

    while (result < number) {
        power++;
        result = Math.pow(3, power);
    }

    if (result === number) {
        alert(number + " можна отримати шляхом зведення числа 3 до ступеня " + power + ".");
    } else {
        alert(number + " не можна отримати шляхом зведення числа 3 до цілого ступеня.");
    }
} else {
    alert("Будь ласка, введіть додатне число.");
}
