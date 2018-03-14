function isSelfDividingNumber(num) {
    return num.toString() // 66
        .split('') // [ '6', '6' ]
        .map(Number) // [ 6, 6 ]
        .map((digit) => {
          //console.log("digit: ", digit); // 1st line 6 / 2nd line 6
          //console.log("num: ", num); // 1st line 66 / 2nd line 66
          return digit !== 0 && num % digit === 0;
        }) //. [ true, true ]
        .reduce((acc, val) => {
          //console.log("acc: ", acc); // true
          //console.log("val: ", val); // true
          return acc && val;
        }); // true
}

function selfDividingNumbers(left, right) {
    //console.log(new Array(right - left + 1).fill(0));
    //creates the array => check each number by selfDividing
    return new Array(right - left + 1)
        .fill(0)
        .map((val, index) => {
          //console.log(left+index);
          return left + index;
        })
        .filter((val) => {
          //console.log(val);
          return isSelfDividingNumber(val)
        });
};

let x = selfDividingNumbers(1,22);
console.log(x);