// массив  task 4
let numbers=[12,-23,-7,4,9,0,24,-1];

let max = numbers[0];
let maxIndex = 0;


for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    maxIndex = i;
    max = numbers[i];
  }
}
console.log(maxIndex);

