function sayHi (name) {
    alert ('Hi ' + name);  //3
}
function sayGoodBye (name) {
    alert ('GoodBye ' + name); // 6
}
function testSay (f) {
    let a = prompt ('Name ????') //1 //4
    alert ('Here I say'); //2 //5
    f(a); //hàm callback 
}
testSay(sayHi);
testSay(sayGoodBye);
