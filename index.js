let x= prompt('Input a coordination x:',' ');
let y= prompt('Input a coordination y:',' ');
if(x>o && y>0){
    console.log("first quarter");
}else if(x>o && y<0){
    console.log("fourth quarter");
}else if(x<0 && y>0){
    console.log("second quarter");
}else if (x<0 && y<0){
    console.log("third quarter");
}else{
    console.log("It's a centre");
}