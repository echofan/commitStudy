// 定义自己的类型
class primitveString {
  static [Symbol.hasInstance](data) {
    return typeof data === 'string'
  }
}

function isComplex(data) {
  if (data && (typeof data === 'object' || typeof data === 'function')) {
      return true;
  }
  return false;
}

let num = 1
console.log(num instanceof primitveString)
console.log(isComplex(num))
