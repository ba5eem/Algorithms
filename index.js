function hammingWeight(n) {
  let arr = (n >>> 0)
    .toString(2)
    .split('')
    return arr;

}




console.log(hammingWeight(10));





function hammingWeight(n) {
    let str = (n >>> 0).toString(2)
      console.log(str); //1010
    let arr = str.split('');
      console.log(arr); //[ '1', '0', '1', '0' ]
    let num = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === '0'){
        num ++;
      }
    }
    return arr.length - num;
};

