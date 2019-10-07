// циклы task 6
let number= 12345;
console.log(`Before ${number}`);
let mirror=0;
while(number!=0){
    mirror=mirror*10 + number%10;
    number/=10;
}console.log(`After ${mirror}`);