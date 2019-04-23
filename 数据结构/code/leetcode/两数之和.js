const twoSum = function (nums, target) {
  const numsList = nums
  const targets = target
  for(let i=0; i<numsList.length;i++){
    for(let j=i+1;j<numsList.length;j++){
      if(numsList[i]+numsList[j] === target) {
        return [i,j]
      }
    }
  }
}

var index = twoSum([2,7,11,15], 9)
console.log(index)