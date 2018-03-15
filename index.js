function reverseBits(bits,n) {
  let reversed = 0;
  let last;
  new Array(bits).fill(0).map(() => {
    last = n & 1;
    n >>= 1;
    reversed <<=1;
    reversed += last;
  })
  return reversed >>> 0;
}

console.log(reverseBits(32, 964176192)); // 43261596
console.log(reverseBits(32, 43261596)); // 964176192








// function reverseBits(n) {
//   let reversed = 0;
//   let last;
//   for(var i = 0; i < 32; i++){
//     last = n & 1;
//     n >>= 1;
//     reversed <<=1;
//     reversed += last
//   }
//   return reversed >>> 0;
// };

// console.log(reverseBits(43261596));



// function fizzBuzz(n){
//   let arr = [];
//   new Array(n).fill(0).map((elem, i) => {
//     return i+1;
//   }).filter(elem => {
//     (elem % 3 !== 0) && (elem % 5 !== 0) && arr.push(elem);
//     (elem % 3 === 0) && (elem % 5 !== 0) && arr.push(elem + ': Fizz');
//     (elem % 5 === 0) && (elem % 3 !== 0) && arr.push(elem + ': Buzz');
//     (elem % 3 === 0) && (elem % 5 === 0) && arr.push(elem + ': FizzBuzz');
//   })
//   return arr;
// }
// console.log(fizzBuzz(15))
