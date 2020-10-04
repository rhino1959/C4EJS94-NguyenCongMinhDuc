let num = document.getElementById ('num')
let but = document.getElementById ('but')
let ret = document.getElementById ('ret')

let ran = [1,2,3,4,5,6,7,8,9,10];
const random = Math.floor(Math.random() * ran.length);

but.addEventListener ('click' ,function(){
    if (num == ran[random]) {
        ret.innerHTML = 'Đúng'
        ret.innerHTML = 'Số may mắn đúng là: '+ran[random]
    }
    else {
        ret.innerHTML = 'Sai'
    }
}) 