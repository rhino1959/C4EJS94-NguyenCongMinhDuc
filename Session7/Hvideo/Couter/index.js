let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let num = document.getElementById("number"); 
let number = 0;

plus.addEventListener("click", () => {
    number++;
    print(number);
});

minus.addEventListener("click", () => {
    number--;
    print(number);
});

function print(number){
    num.innerHTML = number;
}