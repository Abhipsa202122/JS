var area="circle";
var PI=3.142,l=5,b=4,r=3;
if (area=="circle"){
    console.log("the area of the circle is:"+PI*r**2);
}
else if(area=="triangle"){
    console.log("the area of the circle is"+l*b/2);

}
else if(area=="rectangle"){
    console.log("the area of the circle is"+l*b)   
}
else{
    console.log("please enter valid data")
}
var area="circle";
var PI=3.142,l=5,b=4,r=3;
switch(area){
    case"circle":
      console.log("the area of the circle is:"+PI*r**2);
      break;
    case"triangle":
      console.log("the area of the circle is"+l*b/2);
      break;
    case"rectangle":
      console.log("the area of the circle is"+l*b)   
    default:
      console.log("please enter valid data")
      break;
}