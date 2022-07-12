// Write a python program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
let n=require("readline-sync");
let bs=n.questionInt("enter the salary");
if (bs<=10000){
    console.log("HRA=20%,DA=80%");
}
if (bs<=20000){
    console.log("HRA=25%,DA=90%");
}
if(bs>20000){
    console.log("HRA=30%,DA=95%");
}
else{
    console.log("NOT MATCH")
}
