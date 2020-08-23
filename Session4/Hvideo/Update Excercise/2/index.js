let namedMovie = {
    title: 'The dark knight',
    year: 2012,
    rate: 8.4,
}
let x = prompt ('What you want to update?');
let y = prompt ('What is the update?');

if (x=='title') {
    namedMovie.title = y;
    console.log (namedMovie);
}
else if (x=='year') {
    namedMovie.year = y;
    console.log (namedMovie);

}
else if (x=='rate') {
    namedMovie.rate = y;
    console.log (namedMovie);

}
else {
    alert ('Enter again.')
    break;
}
