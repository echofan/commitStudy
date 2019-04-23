var reverseWords = function(str){
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

var data = reverseWords("Let's take LettCode contest")
console.log(data)