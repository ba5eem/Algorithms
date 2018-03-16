let singleNumber = (nums) => {
  let result = 0;
  for (var i=0; i<nums.length; i++) {
    result ^= nums[i];   
  }
  return result;
}
console.log(singleNumber([2,2,2,2,2,2,2,2,2,2,1]));