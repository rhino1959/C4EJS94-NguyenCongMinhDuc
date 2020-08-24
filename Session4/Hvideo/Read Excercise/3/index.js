let namedMovie = {
    title: 'The dark knight',
    year: 2012,
    rate: 8.4,
};

while (true) {
    let prop = prompt('What do you want to know ?');
    if (prop == null || prop == undefined) {
        alert('Property is null or undefined');
    }
    else if (namedMovie[prop] == undefined) {
        alert(`${prop} does not exist in our data`);
        break;
    }
    else {
        alert(namedMovie[prop]);
        break;
    }
}