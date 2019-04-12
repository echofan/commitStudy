import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { createElement, render, renderDom } from './page/elementDom/element'

let virtualDom = createElement('ul', {calss: 'list'}, [
  createElement('li', {class: 'item'}, [
    createElement('a', {class: 'href'}, ['跳转1']),
    createElement('a', {class: 'href'}, ['跳转2'])
  ]),
  createElement('li', {class: 'item'}, ['万靓']),
  createElement('li', {class: 'item'}, ['李鈊嬅'])
])

console.log(virtualDom)

// 转为真实dom
let el = render(virtualDom)
console.log(el)

// 渲染到页面

renderDom(el, document.getElementById('root'))

const sum = (n) => {
  if (n <= 1) return n;
  return n + sum(n-1)
}
sum(3)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
