//условные операторы   task 4
let a = prompt('Input a first num: ', ' ');
let b = prompt('Input a second num: ', ' ');
let c = prompt('Input a third num: ', ' ');
let multiplication= a*b*c;
let sum= a+b+c;
let max;
if(multiplication>sum){
max=multiplication+3;
}else{
 max=sum+3;
}
console.log(max);