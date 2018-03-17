let s = "abcd";
let t = "abcde";

var combineStrings = function(s, t) {
  return s.split('').concat(t.split(''));
}

const findTheDifference = (s,t) => {
  let arr = combineStrings(s,t); 
  let count = arr.reduce((tally, elem) => {
    tally[elem] = (tally[elem] || 0) + 1;
    return tally;
  },{})
  return Object.keys(count).reduce((a,b) => {
    let res = count[a] < count[b] ? a : b;
    return res;
  });  
};
console.log(findTheDifference(s,t));

