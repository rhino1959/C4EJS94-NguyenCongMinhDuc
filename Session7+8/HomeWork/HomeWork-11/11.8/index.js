let button = document.getElementById('button');
let text = document.getElementById('text');
let result = document.getElementById('result');

button.addEventListener ('click', function (){
    console.log ('clicked')
    let inp = text.value
    console.log ('User name is: ' + inp)
    console.log ('User name UppperCase: ' + inp.toUpperCase())
    result.innerHTML=inp.toUpperCase()
})