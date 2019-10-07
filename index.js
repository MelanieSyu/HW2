// массив  task 4
let arr = [12,-32,-3,5,28,-9,0,4];
let oddNum = [];
for (let i = 1; i<=arr.length; i++){
    arr.push(i);
    if(i%2!==0){
        oddNum.push(i);
    }
}
  console.log(`count odd number ${oddNum.length}`);
  console.log(`Odd elements of massive ${oddNum}`)


