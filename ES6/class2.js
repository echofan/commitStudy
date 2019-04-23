class Bar {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

Object.assign(Bar.prototype, {
  toString() {
    return x + y
  }
})

const a = new Bar(1, 2)
console.log(a.toString())