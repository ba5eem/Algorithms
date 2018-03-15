## Algorithms
Code Examples for Algorithms

## Reverse a String - (easy):

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
```

## Factorialize a Number - (easy):

```js
function factorialize(num) {
  if(num === 0){
    return 1;
  }
  for(var i = num-1; i >= 1; i--){
    num *=i;
  }
  return num;
}
factorialize(5);
```

## Check for Palindromes - (easy):

```js
function palindrome(str) {
  let removeEmptyChar = /[\W_]/g;
  let lowCaseStr = str.toLowerCase().replace(removeEmptyChar, '');
  let reverseStr = lowCaseStr.split('').reverse().join(''); 
  return reverseStr === lowCaseStr;
}
palindrome("racecar");
```

## Find the Longest Word in a String - (easy):

```js
function findLongestWord(str) {
  let arr = str.split(' ');
  let n = 0;
  for(let i = 0; i < arr.length; i++){
    if(n < arr[i].length){
      n = arr[i].length;
    } 
  }
  return n;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```

## Hamming Distance - (easy):

```js
function hammingDistance (x, y) {
  let arr = (x ^ y).toString(2).split(''); //["1", "0", "1"]
  return arr.filter(elem => elem === "1").length; //2
};

let result = hammingDistance(1,4);
console.log(result);
```

## Hamming Weight - (easy):

```js
function hammingWeight(n) {
    let str = (n >>> 0).toString(2)
      console.log(str); //1010
    let arr = str.split('');
      console.log(arr); //[ '1', '0', '1', '0' ]
    let num = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === '0'){
        num ++;
      }
    }
    return arr.length - num;
};

console.log(hammingWeight(10));
```

## Reverse Bits - (easy):
```js
function reverseBits(n) {
  let reversed = 0;
  let last;
  for(var i = 0; i < 32; i++){
    last = n & 1;
    n >>= 1;
    reversed <<=1;
    reversed += last
  }
  return reversed >>> 0;
};

console.log(reverseBits(43261596));
```

## Rotate String - (easy):
```js
function rotateString(A, B) {
  let count = 0;
  let arrA = A.split('');
  let arrB = B.split('');
  for(let i = 0; i < arrA.length; i++){
    count +=1;
    let first = arrA.shift();
    arrA.splice(arrA.length,1, first);
    if(arrA.join('') === arrB.join('')){
     return true;
    }
    else if(count === arrA.length){
     return false
    }
  }
}

let a = 'abcde';
let b = 'cdeab';
console.log(rotateString(a,b))
```

## Self Dividing Number - (medium):

```js
function isSelfDividingNumber(num) {
    return num.toString() // 66
        .split('') // [ '6', '6' ]
        .map(Number) // [ 6, 6 ]
        .map((digit) => {
          //console.log("digit: ", digit); // 1st line 6 / 2nd line 6
          //console.log("num: ", num); // 1st line 66 / 2nd line 66
          return digit !== 0 && num % digit === 0;
        }) //. [ true, true ]
        .reduce((acc, val) => {
          //console.log("acc: ", acc); // true
          //console.log("val: ", val); // true
          return acc && val;
        }); // true
}

function selfDividingNumbers(left, right) {
    //console.log(new Array(right - left + 1).fill(0));
    //creates the array => check each number by selfDividing
    return new Array(right - left + 1)
        .fill(0)
        .map((val, index) => {
          //console.log(left+index);
          return left + index;
        })
        .filter((val) => {
          //console.log(val);
          return isSelfDividingNumber(val)
        });
};

let x = selfDividingNumbers(1,22);
console.log(x);
```

## Array Partition 1 - (medium):

```js
function arrayPairSum(nums) {
  let sum = 0;
  let i = nums.length - 1;
  nums.sort((a,b) => a-b)
  while( i >= 0 ){
    sum += Math.min(nums[i], nums[i-1]);
    i = i - 2;
  }
  return sum;
};

console.log(arrayPairSum([1,2,3,4]))
```

## Reverse Words in a String - (easy):
```js
function reverseWords(s) {
    let reversedWordArr = [];
    let x = s.split(' ');
    for(let i = 0; i < x.length; i++){
      let temp = [];
      temp.push(x[i].split('').reverse().join(''))
      reversedWordArr.push(temp[0])
      temp.pop();
    }

return reversedWordArr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))
```

## FizzBuzz - (easy):
```js
function fizzBuzz(n) {
  let arr = [];
  for(let i = 1; i < n+1; i++){
    let fizz = i % 3 === 0;
    let buzz = i % 5 === 0;
    if(fizz & buzz){
      arr.push('FizzBuzz');
    }
    else if(buzz){
      arr.push('Buzz');
    }
    
    else if(fizz){
      arr.push('Fizz');
    }
    else if(!fizz && !buzz){
      arr.push(i.toString());
    }
  }
  return arr;   
};

console.log(fizzBuzz(15))
```

## Smallest Divisible Number - (easy):

```js
function smallestDivisble(n){
  for(let i = 1; i <= 100000000000; i++){
    let found = true;
    for(let j = 1; j<= n; j++){
      if(i % j !==0){
        found = false;
        break;
      }
    }
    if(found){
      return i;
    }
  }
}
console.log(smallestDivisble(10));
```