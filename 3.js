//Write a python program to check whether a number is divisible by 5 and 11 or not.
var n=require("readline-sync");
var a=n.questionInt("enter no.");
if (a%5==0 & a%11==0){
    console.log("a is divisible");
}
else{
    console.log("not");
}


// let readlineSync = require("readline-sync");
// var n=readlineSync.question("enter a number")
// if (n<10){
//    console.log("n is less than 10")
// }
// else if(n>10 && n<20){
//    console.log("n is less than 20")
// }
// else{
//    console.log("greater than 20")
// }

