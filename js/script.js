
const userInput = prompt('Enter your name');
if (userInput === null || userInput.trim() === "") {
    alert("Скасовано або введено порожній рядок. Введіть ім'я ще раз.");
} else {
    alert('Hello, ' + userInput + '! How are you?');
}

