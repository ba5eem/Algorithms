const reverseBits = (bits,n) => {
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