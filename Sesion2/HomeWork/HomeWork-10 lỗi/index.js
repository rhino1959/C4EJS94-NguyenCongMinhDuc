let z = Number (prompt('as'))
if (z < 16) {
    alert('Severely underweight')
}
else if (16 < z < 18.5) {
    alert('Underweight');
}
else if (18.5 < z < 25) {
    alert('Normal');
}
else if (25 < z < 30) {
    alert('Overweight');
}
else {
    alert('Obese');
}


