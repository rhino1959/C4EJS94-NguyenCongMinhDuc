//1
let film = [
    {title: 'Spider Man',
    year: 2019,
    rate: 8.8},
    {title: 'Iron Man',
    year: 2014,
    rate: 8.2},
    {title: 'Thor',
    year: 2018,
    rate: 8.9},
]
//2
console.log (film[0])
//3
console.log (film[film.length-1].title)
//4
for (let i = 0; i <film.length; i++){
    console.log (film[i])
}
//5 
for ( x = 0; x < film.length; x ++ ) {
    console.log (film[x].title);
    console.log (`Year: ${film[x].year}`);
    console.log (`Rate: ${film[x].rate}`);
    console.log ('----------------------')
}
//6
console.log (film[film.length-1].rate + 0.7)
