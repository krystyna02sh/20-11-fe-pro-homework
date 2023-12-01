const xString = prompt('Введіть перше число');
const x = Number(xString);
const yString = prompt('Введіть друге число');
const y = Number(yString);
if (isNaN(x) || isNaN(y)) {
    alert("Введено нечислове значення або скасовано.")
}
else {
    if (Number.parseFloat(x) && Number.parseFloat(y) && xString?.trim() && yString?.trim()) {
        if (x === y) {
            alert("true")
        }
        else {
            alert("false")
        }
    }
    else {
        alert("Введено нечислове значення або скасовано.")
    }
}



