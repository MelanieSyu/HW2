// массив  task 1
let arr=[12,3,-4,-13,7,9];
let counter = arr.length;
let min = arr[0];
for (let i = 0; i < counter; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
