function reverseWords(s) {
    let reversedWordArr = [];
    let x = s.split(' ');
    for(let i = 0; i < x.length; i++){
      let temp = [];
      temp.push(x[i].split('').reverse().join(''))
      reversedWordArr.push(temp[0])
      temp.pop();
    }

return reversedWordArr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))