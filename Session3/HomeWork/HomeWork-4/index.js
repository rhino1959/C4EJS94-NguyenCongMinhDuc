let item = ['Jean', 'T-Shirt', 'Socks']
while (true) {
    let a = prompt('Hi there, welcom to shop admin panel, what do you want (C,R,U,D)');
    if (a == 'r') {
        console.log ('The current item is:')
        for (let item1=0;item1<item.length;item1++){
            console.log (item1 + ". " + item[item1]);
        }   break;
    }
    else if (a == 'c') {
        let newItem = prompt ('Enter the name of new item');
        alert ('Done');
        item.push (newItem);
    }
    else if (a == 'd') {
        let deleteItem = prompt ('Enter the position you want to delete');
        alert ('Done');
        item.splice (deleteItem,1);
    }
    else if (a == 'u') {
        let updateItem = prompt ('Enter the position you want to update');
        item[updateItem]=prompt('Enter the new name')
        alert ('Done');
        ;
    }
    else {
        alert('Command is not supported');
    }
}