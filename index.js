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




