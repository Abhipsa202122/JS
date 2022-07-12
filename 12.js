// Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let Physics=input("enter marks")
let chemistry=input("enter marks")
let biology=input("enter marks")
let mathematics=input("enter marks")
let computer=input("enter marks")
if (physics>=90){
    console.log("A grade");
}
if (chemistry>=80){
    console.log("B grade")
}
if (biology>=70){
    console.log("C grade")
}
if (mathematics>=60){
    console.log("D grade")
}
if (computer>=40){
    console.log("E grade")
}
else{
    console.log("F grade")
}