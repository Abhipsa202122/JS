//Write a python program to input week number and print week day.
let weekday=require("readline-sync");
let a=weekday.questionInt("enter no"); 
if (a==1){
    console.log("sunday")
}
if (a==2){
    console.log("monday")
}
if (a==3){
    console.log("tuesday")
}
if (a==4){
    console.log("wednesday")
}
if (a==5){
    console.log("thursday")
}
if (a==6){
    console.log("friday")
}
if (a==7){
    console.log("saturday")
}
else{
    console.log("enter week no between 1 to 7")
}



