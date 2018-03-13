

function reverseBits(n) {
  let reversed = 0;
  let last;
  for(var i = 0; i < 32; i++){
    last = n & 1;
    n >>= 1;
    reversed <<=1;
    reversed += last
  }
  return reversed >>> 0;
};

console.log(reverseBits(43261596));