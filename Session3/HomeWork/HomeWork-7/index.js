let a = [3,4,6,-9,10,-88,2];
let b = Number (prompt('Enter a Number'));

while (true) {
    if (a.includes(b)) {
        alert(`${b} is FOUND in my array at index ${a.indexOf(b)}`);
        break;
    } else {
        alert(`${b} is NOT found in my array`);
        break;
    }
}
