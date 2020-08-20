let number = prompt('Enter number of edges');
let corner = 180 - ((number - 2) * 180 / number);
function draw() {
    for (var i = 1; i <= number; i++) {
        fd(50)
        rt(corner)
    }
}
draw()