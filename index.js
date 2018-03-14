function fizzBuzz(n) {
  let arr = [];
  for(let i = 1; i < n+1; i++){
    let fizz = i % 3 === 0;
    let buzz = i % 5 === 0;
    if(fizz & buzz){
      arr.push('FizzBuzz');
    }
    else if(buzz){
      arr.push('Buzz');
    }
    
    else if(fizz){
      arr.push('Fizz');
    }
    else if(!fizz && !buzz){
      arr.push(i.toString());
    }
  }
  return arr;   
};

console.log(fizzBuzz(15))