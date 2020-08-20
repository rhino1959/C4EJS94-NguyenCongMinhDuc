while (true) {
    let x = prompt('Enter Your Username');
    if (x.length < 12) {
        alert('Good Username');
    break;
    }
    else{
        alert('Your username is too long')
    }
}