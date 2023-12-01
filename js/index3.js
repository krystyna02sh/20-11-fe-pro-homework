const numeroString = prompt("Введіть п'ятизначне число");
const numero = Number(numeroString);
if (numeroString === null || numeroString.trim() === "") {
    alert("Введено нечислове значення або скасовано.")
}
else if (Number.isInteger(numero) && -100000 < numero && numero < -9999) {
    const digit5 = numero % 10;
    const digit4 = Math.floor((numero % 1000) / 100);
    const digit3 = Math.floor((numero % 10000) / 1000);
    const digit2 = Math.floor((numero % 100000) / 10000);
    const digit1 = Math.floor((numero % 10) / 10);
    console.log(digit1, digit2, digit3, digit4, digit5);
}
else if (Number.isInteger(numero) && 9999 < numero && numero < 100000) {
    const digit5 = numero % 10;
    const digit4 = Math.floor((numero % 100) / 10);
    const digit3 = Math.floor((numero % 1000) / 100);
    const digit2 = Math.floor((numero % 10000) / 1000);
    const digit1 = Math.floor(numero / 10000);
    console.log(digit1, digit2, digit3, digit4, digit5);
}
else {
    console.log("Введено некоректне число")
}

