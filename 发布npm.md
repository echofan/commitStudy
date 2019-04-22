## 如何发布自己的npm包

##### 1.注册npm账号

注册地址：[www.npmjs.com/](https://link.juejin.im/?target=https%3A%2F%2Fwww.npmjs.com%2F)

##### 2.初始化自己要发布的项目

搭建本地环境：安装node.js，包含了npm命令。 新建目录，在该目录下，初始化项目：npm init。 按照提示填写初始化信息，我的模块名称为：**finitxu-npm-test**，初始版本号：**v1.0.0**。 模块名称需遵循相关政策要求：[www.npmjs.com/policies](https://link.juejin.im?target=https%3A%2F%2Fwww.npmjs.com%2Fpolicies) ， 不能够与已有NPM模块名冲突等等。 模块代码 index.js:

```
function npmDemo(argument) {
	var name = 'finit';
	var f1 =function f(arg){console.log(arg)}
	return {
		name:name,
		f1:f1
	}
}
module.exports=npmDemo();
```



##### 3.登录npm，发布自己的npm包。

```
npm login
```

根据提示输入之前注册的账号、密码。 发布npm包：

```
npm publish
```

此时在自己个人的npm账号主页可以看到该包



##### 4.使用自己发布的包（模块）的示例代码：

安装之前发布的npm包：

```
npm install finitxu-npm-test
```

新建其它目录，初始化：`npm init`。 使用已发布NPM包的示例代码test.js：

```
var test_npm = require('finitxu-npm-test');
console.log(test_npm)
console.log(test_npm.f1(11));
console.log(test_npm.name)
```

运行示例代码：`node test.js`。

输出：

```
{ name: 'finit', f1: [Function: f] }
11
undefined
finit
```

## 5.更新自己的NPM包（模块）及 readme文件

修改代码和readme.md后，执行命令：

```
npm version patch
npm publish
```

npm version后面参数说明：

patch：小变动，比如修复bug等，版本号变动 **v1.0.0->v1.0.1**

minor：增加新功能，不影响现有功能,版本号变动 **v1.0.0->v1.1.0**

major：破坏模块对向后的兼容性，版本号变动 **v1.0.0->v2.0.0**

## 6.使用更新后的NPM包

更新NPM包：

```
针对patch： npm install finitxu-npm-test
针对minor： npm install finitxu-npm-test
针对major： npm install finitxu-npm-test@2.0.0
```