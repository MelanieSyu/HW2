// массив  task 4
let positive = [];
let summ = 0; 
let numbers = [4, -1, 2, 5, -8, -5, 9, -4]; 
for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] > 0) {
        positive.push(numbers[i]);
    }    
}
for (let i = 0; i < positive.length; i++){
    summ += positive[i];
}
console.log(summ); 


