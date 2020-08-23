const colors = ["red", "gray", "blue", "purple", "cyan"];
let n = 0;

for (let i = 0; i < colors.length; i++) {
    color(colors[i]);
    n += 5;
    for (let j = 0; j < 4; j++) {
        fd(20 + n);//đi thẳng
        rt(90);//rẽ phải
    }
}