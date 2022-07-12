// var n=require("readline-sync");
// var year=n.questionInt("enter no");
// leap=false
// if (year%400==0){
//     leap=true
// }
// else if (year%4==0 && yaer%100!=0){
//     leap=true
//     console.log(year)
// }
var year=2020;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
           console.log("the year"+year+"is not leap year");
        }else{
            console.log("the year"+year+"is leap year");
        }
    }else{
        console.log("the year"+year+"is leap year");

    }
}else{
    console.log("the year"+year+"is not leap year");
}