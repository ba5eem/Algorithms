const reverseWords = (str) => {
  let result = [];
  let arr = str.split(' ').map((elem, i, ar) => {
    result.push(ar[i].split('').reverse().join(''));
  })
  return result.join(' ');
}
console.log(reverseWords("Let's take LeetCode contest"));