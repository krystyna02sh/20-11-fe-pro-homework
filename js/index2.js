const x = prompt('Enter first number');
if (!isNaN(x)) {
    alert("Введено вірно")
} else {
    alert("Введено нечислове значення або скасовано.");
}
const y = prompt('Enter second number');
if (!isNaN(y)) {
    alert("Введено вірно")
} else {
    alert("Введено нечислове значення або скасовано.");
}
if (x == y) {
    alert('true')
}
else {
    alert('false')
}

