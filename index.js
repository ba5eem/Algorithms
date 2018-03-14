function arrayPairSum(nums) {
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