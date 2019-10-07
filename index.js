//условные операторы   task 5
let rating = prompt('Please input a student rating: ', ' ');
if(rating<0){
    console.log("Invalid input !");
}else if(rating>=0 && rating<=19){
	console.log("Your grade is  F");
}else if(rating>=20 && rating<=39){
    console.log("Your grade is  E");
}else if(rating>=40 && rating<=59){
    console.log("Your grade is  D");
}else if(rating>=60 && rating<=74){
    console.log("Your grade is  C");
}else if(rating>=75 && rating<=89){
    console.log("Your grade is  B");
}else{
    console.log("Your grade is A")
} 