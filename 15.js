// Take the age of 3 people by user and determine oldest and youngest among them.
var n=require("readline-sync");
var a=n.questionInt("enter no");
var b=n.questionInt("enter no");
var c=n.questionInt("enter no");
if (a<b & a<c){
    console.log("youngest");
}
if (b<a & b>c){
    console.log("oldest");
}
if (c<a & c<b){
    console.log("youngest");
}
else{
    console.log("no match")
}
