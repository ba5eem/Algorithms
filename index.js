function rotateString(A, B) {
  let count = 0;
  let arrA = A.split('');
  let arrB = B.split('');
  for(let i = 0; i < arrA.length; i++){
    count +=1;
    let first = arrA.shift();
    arrA.splice(arrA.length,1, first);
    if(arrA.join('') === arrB.join('')){
     return true;
    }
    else if(count === arrA.length){
     return false
    }
  }
}

let a = 'abcde';
let b = 'cdeab';
console.log(rotateString(a,b))