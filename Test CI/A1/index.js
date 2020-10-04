let x = Number (prompt('nhập số nguyên dương chẵn trong khoảng 4-20'));
if (x < 4 || x > 20 || x%2!==0) {
alert('vui lòng nhập lại');
}
else {
var y =Number (prompt ('nhập số bát kỳ trong dãy'));
}
let r = x/2 + y;
alert ('số đối là: ' + r)
