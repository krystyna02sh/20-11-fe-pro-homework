const x = prompt('Введіть перше число');
if (isNaN(x) || x === null || x.trim() === "") {
    alert("Введено нечислове значення або скасовано.")
} else {
    alert("Введено вірно.");
}
const y = prompt('Введіть друге число');
if (isNaN(y) || y === null || y.trim() === "") {
    alert("Введено нечислове значення або скасовано.")
} else {
    alert("Введено вірно");
}
if (x == y) {
    alert('true')
}
else {
    alert('false')
}

