## Algorithms
Code Examples for Algorithms

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

## Reverse Words in a String - (easy):
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



