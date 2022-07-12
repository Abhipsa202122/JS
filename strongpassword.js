let n=require("readline-sync");
let a=n.questionInt("enter no");
if (a>"A" & a<="Z" || a>="a" & a<="z" || a>="@" & a<="&" || a>="1" & a<="9"){
    if (len(a)>="6" & len(a)<="12"){
        console.log("strong password");
    } 
}
    else{
    console.log("incorrect password");
} 