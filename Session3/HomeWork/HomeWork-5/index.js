let a =  prompt (' nhập dãy số cần tính, mỗi số cách nhau bởi dấu phẩy:');
let b = a.split(",");
let c = 0;
for (let x =0; x <b.length ; x++){
    c += Number( b[x]);
}
alert ('tổng của dãy số là: ' + c);
