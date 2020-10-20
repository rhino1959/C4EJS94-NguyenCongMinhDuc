let s1 = prompt ('nhập chuỗi 1: ')
let s2 = prompt ('nhập chuỗi 2: ')
let sp1 = s1.split("")
let sp2 = s2.split("")
if (sp1.length <sp2.length) {
    for (let x=0 ; x < sp2.length ; x++) {
        console.log (sp1[x])
        console.log (sp2[x])
        }
}
else {
    for (let x=0 ; x < sp1.length ; x++) {
        console.log (sp1[x])
        console.log (sp2[x])
        }
}
// let a= sp1.concat(sp2)
// console.log (a)