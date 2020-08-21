//1
let sheepSize = [5, 7, 300, 90, 24, 50, 75];
console.log('Hi, my name is Duc and there are my sheep sizes:');
console.log(sheepSize.join(" "));
console.log ('')
//2
let max = Math.max(...sheepSize);
console.log('Now my biggest sheep has size: ' + max + ", let's shave ỉt");
console.log ('')
//3
console.log('After shearing, here is my flock:');
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max) {
        sheepSize[i] = 8;
    }
}
console.log(sheepSize.join(" "));
console.log ('')
//4
console.log('MONTH 1:')
console.log('One month latter, my sheep is grow and here are their sizes:');
for (x = 0; x < sheepSize.length; x++) {
    sheepSize[x] += 50;
}
console.log(sheepSize.join(" "))
let max1 = Math.max(...sheepSize);
console.log('Now my biggest sheep has size: ' + max1 + ", let's shave ỉt");

console.log('After shearing, here is my flock:');
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max1) {
        sheepSize[i] = 8;
    }
}
console.log(sheepSize.join(" "));
console.log ('')
//5
console.log('MONTH 2:')
console.log('One month latter, my sheep is grow and here are their sizes:');
for (x = 0; x < sheepSize.length; x++) {
    sheepSize[x] += 50;
}
console.log(sheepSize.join(" "))
let max2 = Math.max(...sheepSize);
console.log('Now my biggest sheep has size: ' + max2 + ", let's shave ỉt");

console.log('After shearing, here is my flock:');
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max2) {
        sheepSize[i] = 8;
    }
}
console.log(sheepSize.join(" "));
console.log ('')


console.log('MONTH 3:')
console.log('One month latter, my sheep is grow and here are their sizes:');
for (x = 0; x < sheepSize.length; x++) {
    sheepSize[x] += 50;
}
console.log(sheepSize.join(" "))
let max3 = Math.max(...sheepSize);
console.log('Now my biggest sheep has size: ' + max3 + ", let's shave ỉt");

console.log('After shearing, here is my flock:');
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max3) {
        sheepSize[i] = 8;
    }
}
console.log(sheepSize.join(" "));
console.log ('')

console.log('MONTH 4:')
console.log('One month latter, my sheep is grow and here are their sizes:');
for (x = 0; x < sheepSize.length; x++) {
    sheepSize[x] += 50;
}
console.log(sheepSize.join(" "))
let max4 = Math.max(...sheepSize);
console.log('Now my biggest sheep has size: ' + max4 + ", let's shave ỉt");

console.log('After shearing, here is my flock:');
for (let i = 0; i < sheepSize.length; i++) {
    if (sheepSize[i] == max4) {
        sheepSize[i] = 8;
    }
}
console.log(sheepSize.join(" "));
console.log ('')
//6
let b = 0;
for (a = 0; a < sheepSize.length; a++) {
    b += Number(sheepSize[a])
}
console.log('My fock has size in total: ' + b)
console.log('i would to get it: ' + b + ' x$2 ' + '= ' + '$' + b * 2)
