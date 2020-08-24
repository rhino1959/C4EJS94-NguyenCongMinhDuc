let namedMovie = {
    title: 'The dark knight',
    year: 2012,
    rate: 8.4,
}
while (true){
    let prop = prompt('What do you want to update?');
    if (prop == null || prop == undefined || namedMovie[prop] == undefined) {
        alert('Try again.');
    }
    else {
        let prop1 = prompt('What is the update?');
        namedMovie[prop]=prop1;
        console.log (namedMovie);
        break;
    }
}