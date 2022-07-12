var a=require("readline-sync");
var b=a.questionInt("enter no");
var c=a.questionInt("enter no")
if (c<b){
    console.log("c is greater than b")
}
else if(b>c){
    console.log("equal")
}
else if(c==b){
    console.log("equal")
}
else{
    console.log("c is less than b")
}

