## Algorithms
Code Examples for Algorithms

## Reverse a String

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
```

## Factorialize a Number

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

## Check for Palindromes

```js
function palindrome(str) {
  let removeEmptyChar = /[\W_]/g;
  let lowCaseStr = str.toLowerCase().replace(removeEmptyChar, '');
  let reverseStr = lowCaseStr.split('').reverse().join(''); 
  return reverseStr === lowCaseStr;
}
palindrome("racecar");
```

## Find the Longest Word in a String

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

## Hamming Distance:

```js
function hammingDistance (x, y) {
  let arr = (x ^ y).toString(2).split(''); //["1", "0", "1"]
  return arr.filter(elem => elem === "1").length; //2
};

let result = hammingDistance(1,4);
console.log(result);
```

## Hamming Weight:

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

## Reverse Bits:
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