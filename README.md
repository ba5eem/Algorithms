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
  var removeEmptyChar = /[\W_]/g;
  var lowCaseStr = str.toLowerCase().replace(removeEmptyChar, '');
  var reverseStr = lowCaseStr.split('').reverse().join(''); 
  return reverseStr === lowCaseStr;
}
palindrome("racecar");
```

## Find the Longest Word in a String

```js
function findLongestWord(str) {
    var arr = str.split(' ');
  var n = 0;
  for(var i = 0; i < arr.length; i++){
    if(n < arr[i].length){
      n = arr[i].length;
    } 
  }
  return n;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```
