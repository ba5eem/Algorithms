








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
let x = findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(x);


