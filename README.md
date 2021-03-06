## Algorithms
Code Examples for Algorithms

## Index
<b>[Reverse A String](https://github.com/ba5eem/Algorithms#reverse-a-string---easy) </b> |
<b>[Factorialize a Number](https://github.com/ba5eem/Algorithms#factorialize-a-number---easy) </b> |
<b>[Check for Palindromes](https://github.com/ba5eem/Algorithms#check-for-palindromes---easy) </b> |
<b>[Find the Longest Word in a String](https://github.com/ba5eem/Algorithms#find-the-longest-word-in-a-string---easy) </b> |
<b>[Hamming Distance](https://github.com/ba5eem/Algorithms#hamming-distance---easy) </b> |
<b>[Hamming Weight](https://github.com/ba5eem/Algorithms#hamming-weight-with-map) </b> |
<b>[Reverse Bits](https://github.com/ba5eem/Algorithms#reverse-bits---with-map) </b> |
<b>[Rotate String](https://github.com/ba5eem/Algorithms#rotate-string---easy) </b> |
<b>[Self Dividing Number](https://github.com/ba5eem/Algorithms#array-partition-1---medium) </b> |
<b>[Array Partition 1](https://github.com/ba5eem/Algorithms#array-partition-1---medium) </b> |
<b>[Reverse Words in a String](https://github.com/ba5eem/Algorithms#reverse-words-in-a-string-with-reduce) </b> |
<b>[FizzBuzz](https://github.com/ba5eem/Algorithms#fizzbuzz-attempt-with-map-filter--ternary) </b> |
<b>[Smallest Divisible Number](https://github.com/ba5eem/Algorithms#smallest-divisible-number---easy) </b> |
<b>[Find the Single Number](https://github.com/ba5eem/Algorithms#find-the-single-number---easy) </b> |
<b>[Largest Number At Least Twice of Others](https://github.com/ba5eem/Algorithms#largest-number-at-least-twice-of-others---easy) </b> |
<b>[Find the lat/lng coords 100m from current location](https://github.com/ba5eem/Algorithms#find-the-latlng-coords-100m-from-current-location) </b> |
<b>[Convert Compass number to Compass String](https://github.com/ba5eem/Algorithms#convert-compass-number-to-compass-string) </b> |
<b>[Check Ascending Order](https://github.com/ba5eem/Algorithms#check-ascending-order) </b> |
<b>[Cookie Problem](https://github.com/ba5eem/Algorithms#cookie-problem) </b> |
<b>[Count By Multiples](https://github.com/ba5eem/Algorithms#count-by-multiples) </b> |
<b>[Descending Order](https://github.com/ba5eem/Algorithms#descending-order) </b> |
<b>[Double String Characters](https://github.com/ba5eem/Algorithms#double-string-characters) </b> |
<b>[Find the Longest Word](https://github.com/ba5eem/Algorithms#find-the-longest-word) </b> |
<b>[Find the Stray Value](https://github.com/ba5eem/Algorithms#find-the-stray-value) </b> |
<b>[Find the Unique Number](https://github.com/ba5eem/Algorithms#find-the-unique-number) </b> |
<b>[How Many Litres](https://github.com/ba5eem/Algorithms#how-many-litres) </b> |
<b>[Move the Zeros](https://github.com/ba5eem/Algorithms#move-the-zeros) </b> |
<b>[Needle in the Haystack](https://github.com/ba5eem/Algorithms#needle-in-the-haystack) </b> |
<b>[Swap Letter Case](https://github.com/ba5eem/Algorithms#swap-letter-case) </b> |
<b>[Vowel Count](https://github.com/ba5eem/Algorithms#vowel-count) </b> |
<b>[Find Middle Value](https://github.com/ba5eem/Algorithms#find-middle-value) </b> |
<b>[Return Prime Numbers from Array](https://github.com/ba5eem/Algorithms#return-prime-numbers-from-array) </b> |
<b>[Return Duplicates from Array](https://github.com/ba5eem/Algorithms#return-duplicates-from-array) </b> |

## Reverse a String - (easy):

```js
const reverseString = (str) => {
  return str.split("").reverse().join("");
}
reverseString("hello");
```

## Factorialize a Number - (easy):

```js
const factorialize = (num) => {
  if(num === 0){
    return 1;
  }
  for(let i = num-1; i >= 1; i--){
    num *=i;
  }
  return num;
}
factorialize(5);
```

## Check for Palindromes - (easy):

```js
const palindrome = (str) => {
  let removeEmptyChar = /[\W_]/g;
  let lowCaseStr = str.toLowerCase().replace(removeEmptyChar, '');
  let reverseStr = lowCaseStr.split('').reverse().join('');
  return reverseStr === lowCaseStr;
}
palindrome("racecar");
```

## Find the Longest Word in a String - (easy):

```js
const findLongestWord = (str) => {
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

## Find and Return longest Word with Map:

```js
const findLongestWord = (str) => {
  let n = 0;
  let arr = str
    .split(' ')
    .map((word, i) => {
      (n < word.length) && (n = word.length);
      return word;
    })
    .map(word => {
      return (word.length === n) && word;
    });
  console.log(arr);
  return arr;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```


## Hamming Distance - (easy):

```js
const hammingDistance = (x, y) => {
  return arr = (x ^ y)
    .toString(2)
    .split('') //["1", "0", "1"]
    .filter(elem => elem === "1").length; //2
};
console.log(hammingDistance(1,4));
```

## Hamming Weight - (easy):

```js
const hammingWeight = (n) => {
    let str = (n >>> 0).toString(2)
      console.log(str); //1010
    let arr = str.split('');
      console.log(arr); //[ '1', '0', '1', '0' ]
    let num = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === '0'){
        num ++;
      }
    }
    return arr.length - num;
};

console.log(hammingWeight(10));
```

## Hamming Weight with Map:
```js
const hammingWeight = (n) => {
  let num = 0;
  let arr = (n >>> 0)
    .toString(2)
    .split('')
    .map((elem, i) => {
      (elem === '0') && num ++;
    })
  return arr.length - num;
}

console.log(hammingWeight(10));
```


## Reverse Bits - (easy):
```js
const reverseBits = (n) => {
  let reversed = 0;
  let last;
  for(let i = 0; i < 32; i++){
    last = n & 1;
    n >>= 1;
    reversed <<=1;
    reversed += last
  }
  return reversed >>> 0;
};

console.log(reverseBits(43261596));
```

## Reverse Bits - with Map:

```js
const reverseBits = (bits,n) => {
  let reversed = 0;
  let last;
  new Array(bits).fill(0).map(() => {
    last = n & 1;
    n >>= 1;
    reversed <<=1;
    reversed += last;
  })
  return reversed >>> 0;
}

console.log(reverseBits(32, 964176192)); // 43261596
console.log(reverseBits(32, 43261596)); // 964176192
```


## Rotate String - (easy):
```js
const rotateString = (A, B) => {
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
const isSelfDividingNumber = (num) => {
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

const selfDividingNumbers = (left, right) => {
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
const arrayPairSum = (nums) => {
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

## everse Words in a StringR - (easy):
```js
const reverseWords = (str) => {
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

## Reverse Words in a String with Map:

```js
const reverseWords = (str) => {
  let result = [];
  let arr = str.split(' ').map((elem, i, ar) => {
    result.push(ar[i].split('').reverse().join(''));
  })
  return result.join(' ');
}
console.log(reverseWords("Let's take LeetCode contest"));
```

## Reverse Words in a String with Reduce:

```js
const reverseWords = (str) => {
  return str.split(' ').reduce((prev, curr) => {
    prev.push(curr.split('').reverse().join(''));
    return prev;
  },[])
}
console.log(reverseWords("Let's take LeetCode contest"));
```


## FizzBuzz - (easy):
```js
const fizzBuzz = (n) => {
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

## FizzBuzz Attempt with Map, Filter & Ternary:

```js
const fizzBuzz = (n) => {
  let arr = [];
  new Array(n).fill(0).map((elem, i) => {
    return i+1;
  }).filter(elem => {
    (elem % 3 !== 0) && (elem % 5 !== 0) && arr.push(elem);
    (elem % 3 === 0) && (elem % 5 !== 0) && arr.push(elem + ': Fizz');
    (elem % 5 === 0) && (elem % 3 !== 0) && arr.push(elem + ': Buzz');
    (elem % 3 === 0) && (elem % 5 === 0) && arr.push(elem + ': FizzBuzz');
  })
  return arr;
}
console.log(fizzBuzz(15))
```


## Smallest Divisible Number - (easy):

```js
const smallestDivisble = (n) => {
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

## Find the Single Number with Reduce - (easy):

```js
const singleNumber = (nums) => {
  let count = nums.reduce((tally, elem) => {
    tally[elem] = (tally[elem] || 0) + 1;
    return tally;
  },{})
  return Object.keys(count).reduce((a,b) => {
    let res = count[a] < count[b] ? a : b;
    return parseInt(res);
  });
};
console.log(singleNumber([2,2,2,2,2,2,2,2,2,2,1]));
```

## Find the Single Number - (easy):

```js
const singleNumber = (nums) => {
  let result = 0;
  for (let i=0; i<nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}
console.log(singleNumber([2,2,2,2,2,2,2,2,2,2,1]));
```

## Largest Number At Least Twice of Others - (easy):

```js
const dominantIndex = (nums) => {
  let bigger;
  let idx;
  let biggest = Math.max(...nums);
  let withoutBiggest = nums.filter(elem => {
    return elem !== biggest;
  })
  let secondBiggest = Math.max(...withoutBiggest);
  let doubled = secondBiggest * 2;
    if(doubled <= biggest) { bigger = true }
    if(bigger){
      nums.filter((elem,i) => {
        if(elem === biggest){ idx = i; }
      })
    } else{ idx = -1; }
  return idx;
};
console.log(dominantIndex([3, 6, 1, 0]))
```
## Find the lat/lng coords 100m from current location

```js
let geo = {
        bearing : function (lat1,lng1,lat2,lng2) {
            let dLon = this._toRad(lng2-lng1);
            let y = Math.sin(dLon) * Math.cos(this._toRad(lat2));
            let x = Math.cos(this._toRad(lat1))*Math.sin(this._toRad(lat2)) - Math.sin(this._toRad(lat1))*Math.cos(this._toRad(lat2))*Math.cos(dLon);
            let brng = this._toDeg(Math.atan2(y, x));
            return ((brng + 360) % 360);
        },
        _toRad : function(deg) {
             return deg * Math.PI / 180;
        },
        _toDeg : function(rad) {
            return rad * 180 / Math.PI;
        },
        _makeCompass: function (northInMeters,eastInMeters,observer) {
          let R=6378137;
          let dLat = northInMeters/R;
          let dLon = eastInMeters/(R*Math.cos(Math.PI*observer.lat/180));
          let lat = observer.lat + dLat * 180/Math.PI;
          let lon = observer.lon + dLon * 180/Math.PI;
          return {lat: lat, lon: lon };
        }
    };
let compass = {
  N: geo._makeCompass(100,0,your_location),
};
console.log(compass);
```

## Convert Compass number to Compass String

```js
const toCompass = (degrees) => {
  return ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'][Math.round(degrees / 11.25 / 2)];
}
```

## Check Ascending Order

```js
function checkAscOrder(arr) {
  return arr.every((val, i, arr) => {
    //console.log(val) // every # in array
    //console.log(i) // index
    //console.log(arr) // whole array
    return !i || (val >= arr[i - 1]);
  });
}
```

## Cookie Problem

```js
function cookieProblem(array) {
  let max = array.sort()[array.length-1];
  // sort array then choose last # of array
  let sum = array.map(n => {
    // map every elem in array and subtract the max with each elem and return it in an array
    return max-n;
  },[]);
  return sum.reduce((acc,val) => {
    // sum all values in array to get total result
    return acc + val;
  })
};
```

## Count By Multiples

```js
function countByMultiples(length, x) {
  let arr = []; // set empty array
  for(let i = 1; i < 1000; i++){
    // loop through 1 -> 1000
    // check if modulous of x number push this into the array
    (i % x === 0) && arr.push(i);
  }
  // use slice to only return array of length given
  return arr.slice(0,length);
}
```

## Descending Order

```js
function descendingOrder(number) {
  if(typeof number !== 'number'){
    return 'not a number!';
  }
  else{
   return parseFloat(number.toString().split('').sort().reverse().join(''));
  }

}
```

## Double String Characters

```js
function doubleStrChars(str) {
  if(typeof(str) === 'number'){
    return 'not a string!';
  }
  else if(typeof(str) === "boolean"){
    return 'not a string!';
  }
  else if(str === undefined){
    return 'not a string!';
  }
  return str
    .split('')
    .reduce(function (res, current, index, array) {
      return res.concat([current, current]);
    }, []).join('');
}
```

## Find the Longest Word

```js
function findTheLongestWord(str) {
  let arr = [];
  let res = str.map((elem,i) => {
    // return length of every word into an array
    return elem.length;
  },[]);
  // find biggest value of array
  let max = Math.max(...res);
  // find index in array with that max
  let idx = res.indexOf(max);
  return str[idx];
}
```

## Find the Stray Value

```js
function findTheStrayValue(arr) {
  return arr.filter((value) => {
    return arr.indexOf(value) === arr.lastIndexOf(value);
  })[0] || -1;
}
```

## Find the Unique Number

```js
function findUniqueNum(x) {
  let y = x.split(' ');
  let idx;
  let res = y.map((elem,i) => {
    if(elem % 2 !== 0){
      idx = i;
      }
  })
  return idx;
};
```

## How Many Litres

```js
function howManyLitres(hours) {
  return Math.floor((hours*0.5));
}
```

## Move the Zeros

```js
function moveTheZeros(arr, bool) {
  let without = arr.filter(elem => {
    return elem !== 0;
  });
  let withZ = arr.filter(elem => {
    return elem === 0;
  });
  if(bool){
    return [...without,...withZ]
  }
  else{
    return [...withZ,...without]
  }
}
```

## Needle in the Haystack

```js
function needleInHaystack(haystack) {
  let x = haystack.indexOf('needle');
  if(x === -1){
    return false;
  }
  else{
    return x;
  }
}
```

## Swap Letter Case

```js
function swapLetterCase(str) {
  return str.split('').map(elem => {
    if(elem === elem.toUpperCase()){
      return elem.toLowerCase();
    }
    else if(elem === elem.toLowerCase()){
      return elem.toUpperCase();
    }
  },[]).join('');
}
```

## Vowel Count

```js
function vowelCount(str) {
  let x = str.match(/[aeiou]/gi);
  // regex lookup for all vowels
  if(x === null){
    return 0;
  }
  else{
    return x.join('').length;
  }
}
```

## Find Middle Value

```js
function findMiddleValue(arr) {
  let midVal = new Array(arr[0],arr[1],arr[2]).sort((a,b) => a - b)[1];
  return arr.indexOf(midVal);
}
```

## Half Life

```js
function halfLife(initialQuantity, quantityRemaining, time) {
  return time / Math.log2(initialQuantity / quantityRemaining);
}
```

## Return Prime Numbers from Array

```js
let arr = [2,2,5,10,8,10,3,5,11,17];

let primeNumbersArr = [];

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

for(var i = 0; i < arr.length; i++){
  if(isPrime(arr[i])){
    primeNumbersArr.push(arr[i]);
  }
}

console.log(primeNumbersArr);
```

## Return Duplicates from Array

```js
let arr = [2,2,5,10,8,10,3,5];

var sorted_arr = arr.sort();
console.log(sorted_arr);

var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);
```