// 虚拟dom元素的类，构建实例对象，用来描叙dom 
/**
 * type 指示元素的标签类型
 * props 指示元素身上的属性
 * children 标识元素是否有子节点
 */
class Element {
  constructor (type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
} 

// 创建虚拟dom，返回虚拟节点（object） 
function createElement (type, props, children) {
  return new Element(type, props, children)
}

// render方法可以把虚拟dom转为真实dom
function render (domObj) {
  // 根据type类型来创建对应的元素
  let el = document.createElement(domObj.type)

  //遍历props属性对象，然后给创建的元素设置props属性
  for (let key in domObj.props) {
    setAttr(el, key, domObj.props[key])
  }

  /* 
    遍历子节点
    如果是虚拟dom 就说明还有子节点 继续递归渲染
    不是的话代表是文本节点，直接创建
  */
  domObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    // 添加到对应元素内
    el.appendChild(child)
  });
  return el
}

// 设置属性
function setAttr (node, key, value) {
  switch (key) {
    case 'value':
      // node 是一个input或者textarea就直接设置value
      if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break;
    case 'style':
      // 直接赋值行类样式  
      node.style.cssText = value
      break;
    default:
      node.setAttribute(key, value)
      break;  
  }
}

// 将元素插到页面内
function renderDom (el, target) {
  console.log(el, '================', target)
  // target.appendChild(el)
}

export {
  Element,
  createElement,
  render,
  renderDom,
  setAttr
}