//Write a python program to count the total number of notes in a given amount.
let n=require("readline-sync");
let notes=n.questionInt("enter a notes");
let cash=n.questionInt("enter a cash");
if (notes==10){
    console.log(cash/notes);
}
else if (notes==20){
    console.log(cash/notes);
}
else{
    console.log("nothing");
}
 