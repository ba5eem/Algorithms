function factorialize(num) {
  if(num === 0){
    return 1;
  }
  for(var i = num-1; i >= 1; i--){
    num *=i;
  }
  return num;
}
console.log(factorialize(5));