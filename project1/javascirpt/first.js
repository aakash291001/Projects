let a = 10;
console.log(a);
let b = [1, 2, 3, 4, 5, 6];
console.log(b);
console.log("Hello world");

c = 100; //global scope

var d = 200; // function scope

let e = 300; //Block Scope

function fun()
{
    var ab = 10;
    if(ab == 10)
    {
        let ac = 100;
        var ad = 200;
        ae = 300;
        console.log("Inside block",ac);
    }
    console.log("Outside block",ad);        
    // console.log("Outside block",ac); this will show error
}
fun();
console.log("Outside Function",ae);
// console.log(ad); this will show the error

function square_root(n)
{
    console.log(Math.sqrt(n));
}