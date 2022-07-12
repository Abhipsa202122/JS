// Write a python program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var electricity=require("readline-sync");
var n=electricity.questionInt("enter no");
if (n<=50){
    amount=n*0.50
    surcharge=amount*20/100
    console.log(amount+surcharge);
}
if (n<=100){
    amount=n*0.75
    surcharge=amount*20/100
    console.log(amount+surcharge);
}
if (n<=100){
    amount=n*1.20
    surcharge=amount*20
    surcharge=amount*20
    console.log(amount+surcharge);
}
if (n<=250){
    amount=n*1.50
    surcharge=amount*20/100
    console.log(amount+surcharge);
}

