let button = document.getElementById('button');
let text = document.getElementById('text');
let result = document.getElementById('result');

button.addEventListener ('click',function (){
    let inp = text.value;
    console.log ('clicked')
    console.log ("user's name: " + inp)
    console.log ("user's name uppercase: " + inp.toUpperCase())

})
