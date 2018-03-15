function fizzBuzz(n){
  let arr = [];
  new Array(n).fill(0).map((elem, i) => {
    return i+1;
  }).filter(elem => {
    (elem % 3 !== 0) && (elem % 5 !== 0) && arr.push(elem);
    (elem % 3 === 0) && (elem % 5 !== 0) && arr.push(elem + ': Fizz');
    (elem % 5 === 0) && (elem % 3 !== 0) && arr.push(elem + ': Buzz');
    (elem % 3 === 0) && (elem % 5 === 0) && arr.push(elem + ': FizzBuzz');
  })
  return arr;
}
console.log(fizzBuzz(15))




// function fizzBuzz(n) {
//   let arr = [];
//   for(let i = 1; i < n+1; i++){
//     let fizz = i % 3 === 0;
//     let buzz = i % 5 === 0;
//     if(fizz & buzz){
//       arr.push('FizzBuzz');
//     }
//     else if(buzz){
//       arr.push('Buzz');
//     }
    
//     else if(fizz){
//       arr.push('Fizz');
//     }
//     else if(!fizz && !buzz){
//       arr.push(i.toString());
//     }
//   }
//   return arr;   
// };

//console.log(fizzBuzz(15))