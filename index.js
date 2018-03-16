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