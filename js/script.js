
const userInput = prompt('Enter your name');
var message = 'Hello, ' + userInput + '! How are you?';
if (userInput === null || userInput.trim() === "") {
    alert("Скасовано або введено порожній рядок. Введіть ім'я ще раз.");
} else {
    alert(message);
}

