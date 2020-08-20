let poli = prompt('How many polygons');
function draw() {
    for (var j = 1; j <= poli; j++) {
        var number = j + 2;
        let corner = 180 - ((number - 2) * 180 / number);
        for (var i = 1; i <= number; i++) {
            fd(50)
            rt(corner)
        }
    }
}
draw()