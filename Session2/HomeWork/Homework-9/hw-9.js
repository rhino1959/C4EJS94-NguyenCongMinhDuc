//a
console.log('Write a program to print out 6 L’s and H’s, half L’s, half H’s (L means low, H means high)');
for (var i = 1; i <= 6; i++) {
    if (i <= 3) {
        console.log('L');
    } else {
        console.log('H');
    }
}

//b
console.log('Write a program to print out n L’s and H’s in total, n entered by user');
let n = Number.parseInt(prompt("Enter the total number of L's and H's"));
for (var i = 1; i <= n; i++) {
    if (i < n / 2 + 1) {
        console.log('L');
    } else {
        console.log('H');
    }
}

//c
console.log('Write a program to print out 8 1’s and 0’s in total, consecutively');
for (var i = 1; i <= 8; i++) {
    if (i % 2 == 1) {
        console.log('0 \n');
    } else {
        console.log('1 \n');
    }
}

//d
console.log('Write a program to print out n 1’s and 0’s in total, consecutively, n entered by user');
let n = Number.parseInt(prompt("Enter the total number of 1's and 0's?"));
for (var i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        console.log('0 \n');
    } else {
        console.log('1 \n');
    }
}