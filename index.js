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