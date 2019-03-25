function seachXiaoJieJie(age:number):string{
  return '找到了' + age + '岁的小姐姐'
}
var age:number = 33
var result:string = seachXiaoJieJie(age)
// console.log(result)

// 默认参数
function aaa(age:number,stature:string='大胸'):string{
  let yy:string = ''
  yy = '找到了' + age +'岁'
  if(stature !== undefined) {
    yy = yy + stature
  }
  return yy + '的小姐姐'
}
var result1:string = aaa(22) 
console.log(result1)

// 剩余参数
function bbb(...xuqiu:string[]):string{
  let yy:string = '找到了'
  for (let i=0;i < xuqiu.length;i++){
    yy = yy + xuqiu[i]
    if(i<xuqiu.length){
      yy=yy+'、'
    }
  }
  yy = yy + '小姐姐'
  return yy
}
var result2:string = bbb('22岁','36D','大长腿','水蛇腰')
console.log(result2)



// 全局调用
var yangzi = '李帆'
function mdzz():void{
  console.log('技术胖子被政策' + yangzi+ '墨阳')
}
mdzz()
console.log(yangzi)


// let 关键词
function letNew():void{
  var yangziA:string = '马德华'
  {
    let yangziB:string = '小沈阳'
    console.log('打印粗来的',yangziB)
  }
  console.log('打印粗来的',yangziA)
  console.log('打印粗来的',yangziB)
}
letNew()


// 类的定义
class Xiaojiejie{
  name: string;
  age: number;
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  say() {
    console.log(this.name+'身高'+this.age+'说我鸡巴又粗又长')
  }
}
let aaa1:Xiaojiejie = new Xiaojiejie('范冰冰', 180)
console.log(aaa)
aaa1.say()