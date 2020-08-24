let film = [
     {title: 'Spider Man',
    year: 2019,
    rate: 8.8,
    character: ['a', 'b', 'c']},
    {title: 'Iron Man',
    year: 2014,
    rate: 8.2,
    character: ['d', 'e', 'f']},
    {title: 'Thor',
    year: 2018,
    rate: 8.9,
    character: ['g', 'h', 'i']},
]
for ( i = 0; i < film.length; i++) {
    console.log (film[i].title);
    console.log (`Year: ${film[i].year}`);
    console.log (`Rate: ${film[i].rate}`);
    console.log (`Cast: ${film[i].character}`)
    console.log ('----------------------------------------------------');
}