//Write a python program to check whether the triangle is equilateral, isosceles or scalene triangle.

let a=int(input("enter 1st side"));
let b=int(input("enter 2nd side"));
let c=int(input("enter  3rd side"));
if(a==b & b==c & c==a){
    console.log("equilateral");
}
else if (a==b & b==a & c!=a & b){
    console.log("isoscales");
}
else{
    console.log("scalene")
}
