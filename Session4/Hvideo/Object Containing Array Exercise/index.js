let film = {
    title: 'Spider Man',
    year: 2020,
    rate : 0.1,
    characters: ['Dat', 'Thanh', 'HariWon']
};
let characters = film.characters;
console.log (film.title)
console.log (`Year: ${film.year}`);
console.log (`Rate: ${film.rate}`);
console.log (`Characters: ${characters}`);

console.log ('-----------------------------')

characters.push ('Trường Giang')
console.log (film.title)
console.log (`Year: ${film.year}`);
console.log (`Rate: ${film.rate}`);
console.log (`Characters: ${characters}`);
