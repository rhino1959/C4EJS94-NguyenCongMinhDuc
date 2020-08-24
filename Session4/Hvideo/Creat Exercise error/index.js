let namedMovie = {
    title: 'The dark knight',
    year: 2012,
    rate: 8.4,
}
while (true) {
    let prop = prompt ('What do you want to update?');
    if (namedMovie[prop] !== undefined) {
        alert (`${prop} has existed`)
    }
    else if (prop== null || prop == undefined || prop == ""){
    alert ('Property is null or undefined')}
    else {
    alert (`${prop} does not exist in our data, we will add new`)
    let vl = prompt ('Enter new data.')
    namedMovie[prop] = vl;
    console.log (namedMovie);
    break;
    }
}
