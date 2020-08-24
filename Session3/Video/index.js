let menu = ['cháo', 'cơm', 'phở'];
//1
for (let x= 0; x <menu.length; x++) {
    console.log (menu[x])
}
//2
for (let item of menu) { 
    console.log (item);
}
//3 
console.log (...menu)
//4
for (let item in menu){
    console.log (menu[item]);
}