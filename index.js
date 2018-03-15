function findLongestWord(str) {
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





// function findLongestWord(str) {
//   let arr = str.split(' ');
//   let n = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(n < arr[i].length){
//       n = arr[i].length;
//     } 
//   }
//   return n;
// }



