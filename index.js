const hammingDistance = (x, y) => {
  return arr = (x ^ y)
    .toString(2)
    .split('') //["1", "0", "1"]
    .filter(elem => elem === "1").length; //2
};
console.log(hammingDistance(1,4));





// function ddd(n) {
//     let str = (n >>> 0).toString(2)
//       //console.log(str); //1010
//     let arr = str.split('');
//       //console.log(arr); //[ '1', '0', '1', '0' ]
//     let num = 0;
//     for(var i = 0; i < arr.length; i++){
//       if(arr[i] === '0'){
//         num ++;
//       }
//     }
//     return arr.length - num;
// };

// console.log(ddd(20));