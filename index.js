const reverseWords = (str) => {
  return str.split(' ').reduce((prev, curr) => {
    prev.push(curr.split('').reverse().join(''));
    return prev;
  },[])
}
console.log(reverseWords("Let's take LeetCode contest"));