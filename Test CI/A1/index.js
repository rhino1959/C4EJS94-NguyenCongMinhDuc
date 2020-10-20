let n = Number(prompt('nhập số chẵn n trong khoảng từ 4-20:'))
if (n < 4 || n > 20 || n % 2 !== 0) {
    alert('vui lòng nhập lại')
}
else {
    var x = Number(prompt('nhập số bất kỳ trong dãy'))
    let y = n / 2 + x;
    let z = x - n / 2;
        if (n / 2 > x) {
            alert('số đối là: ' + y)
        }
        else {
            alert('số đối là: ' + z)
        }

}
