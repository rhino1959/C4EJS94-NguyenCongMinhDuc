let a = prompt ('nhập số: ');
let b = a.split (',');
let c = [...b];
for (let i = 0; i < c.length; i++){
    if (c[i] % 2 != 0){
        alert (c[i])
    }
}
