let namedMovie = {
    title: 'The dark knight',
    year: 2012,
    rate: 8.4,
};

delete namedMovie.rate
delete namedMovie['rate']
console.log (namedMovie)