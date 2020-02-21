//statements 1
function count(first, second) {

    if ((first % 2) === 0) {
        return first * second;
    } else {
        return first + second;
    }
}
console.log(count(4, 5));

//2
function getQuarter(x, y) {
    if (x > 0 && y > 0) {
        console.log("1");
    } else if (x < 0 && y > 0) {
        console.log("2");
    } else if (x < 0 && y < 0) {
        console.log("3");
    } else if (x > 0 && y < 0) {
        console.log("4");  
    } else if(x === 0 && y > 0){
        console.log("1 and 2");
    }else if(x === 0 && y < 0){
        console.log("3 and 4");
    }else{
        console.log("x=0 and y=0");
    }
}
console.log(getQuarter(4, 5));

//3
function getSumOfPositive(a, b, c) {
    let arr = [];

    let result = arr.reduce((sum, num) => (num >= 0)? sum + num : sum);
    console.log(result);
}
console.log(getSumOfPositive(4, -5, 7));


// 4
function getSumOfMax(a, b, c) {
    let sum = a+b+c;
    let mult = a*b*c;
    
    let result = (sum > mult)? sum + 3 : mult + 3;
    console.log(result);
}
console.log(getSumOfMax(4, -5, 6));


// 5
function getMark(mark) {
    if (mark >= 0 && mark <= 19) {
        console.log("f");
    } else if (mark >= 20 && mark <= 39) {
        console.log("e");
    } else if (mark >= 40 && mark <= 59) {
        console.log("d");
    } else if (mark >= 60 && mark <= 74) {
         console.log("c");
    } else if (mark >= 75 && mark <= 89) {
         console.log("b");
    } else if (mark >= 90 && mark <= 100) {
        console.log("a");
    }
}
console.log(getMark(78));

//cycle 1
function getSum() {
    let sum = 0;

    for (let i = 0; i < 100; i++) {
        if (i%2 === 0) {
           sum += i;  
        }
    }
    return sum;
}

// 2
function getSimpleNumber(num) {
    if ((num % 2) !== 0){
        console.log('simple');
    } else {
        console.log('composite');
    }
}
console.log(getSimpleNumber(23));

// 4
function getFactorial(num) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(getFactorial(5));

// 5
function getSumOfNum(num) {
    let sum = 0;

    while (num !== 0) {
        sum += num % 10;
        num = (num - sum) / 10;
    } 
    return sum;
}
console.log(getSumOfNum(12345));

// 6
function getReverse(num) {
    let reverse = 0;

    while (num) {
        reverse *= 10;
        reverse += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(reverse);
}
console.log(getReverse(12345));

//array 1
function getMax(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
}
console.log(getMax([-7, 23, -17, 0]));

//////////////////////////////////  3
function getIndexMax(array) {
    let max = array[0];
    let indexMax = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            indexMax = i;
            max = array[i];
        }
    } 
    console.log(indexMax);
}
console.log(getIndexMax([-7, 23, -17, 0]));

//////////////////////////////  5
function getSumOfIndex(array) {
    let sum  = 0;

    for (let i = 1; i < array.length; i++) {
        if (i%2 !== 0) {
            sum += array[i];
        }
    }
    console.log(sum);
}
console.log(getSumOfIndex([-7, 23, -17, 0]));

///////////////////////////////// 6
function getReverseArr(array) {
    let arr2 = [];
    let a = array.length - 1;

    for (let i = a; i >= 0; i--) {
        arr2 += array[i];
    }
    console.log(arr2);
}
console.log(getReverseArr([1, 2, 3, 4]));

//////////////////////////////////// 7
function getSumOfOdds(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (i%2 !==0) {
            result+=1;
        } 
    }
    console.log(result);
}
console.log(getSumOfOdds( [1, 2, 3, 4]));

//////////////////////////////////// 8


//function
function getWeekDays(weekday) {
    let array = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let day = ' ';

    if (weekday > 0 && weekday < 8) {
        for (let i = 0; i < array.length; i++) {
            if (i === weekday - 1) {
                day = array[i];
            }
        }
        console.log(day);
    }
}
console.log('Today Is', getWeekDays(7));

//BubleSorting

function getSortingArray(array) {
    for (let i = 0; i < array.length ; i++) {
        for(let j = 0 ; j < array.length; j++){ 
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = arr[j+1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
  }
console.log(getSortingArray([1,9,2,3,7,6,4,5,5]));