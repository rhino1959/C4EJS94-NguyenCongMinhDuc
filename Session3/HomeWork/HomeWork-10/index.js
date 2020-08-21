let a = prompt ('Nhập tên:');
let b = a.split(','); 
const c = b.map(x => `<${x}>`);
alert(`${a} => ${c}`);