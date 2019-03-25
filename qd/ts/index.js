"use strict";
function seachXiaoJieJie(age) {
    return '找到了' + age + '岁的小姐姐';
}
var age = 33;
var result = seachXiaoJieJie(age);
// console.log(result)
// 默认参数
function aaa(age, stature) {
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature !== undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result1 = aaa(22);
console.log(result1);
// 剩余参数
function bbb() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    yy = yy + '小姐姐';
    return yy;
}
var result2 = bbb('22岁', '36D', '大长腿', '水蛇腰');
console.log(result2);
// 全局调用
var yangzi = '李帆';
function mdzz() {
    console.log('技术胖子被政策' + yangzi + '墨阳');
}
mdzz();
console.log(yangzi);
// let 关键词
function letNew() {
    var yangziA = '马德华';
    {
        var yangziB = '小沈阳';
        console.log('打印粗来的', yangziB);
    }
    console.log('打印粗来的', yangziA);
    console.log('打印粗来的', yangziB);
}
letNew();
// 类的定义
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    Xiaojiejie.prototype.say = function () {
        console.log(this.name + '身高' + this.age + '说我鸡巴又粗又长');
    };
    return Xiaojiejie;
}());
var aaa1 = new Xiaojiejie('范冰冰', 180);
console.log(aaa);
aaa1.say();
