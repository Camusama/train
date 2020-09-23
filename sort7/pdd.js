function createAPromise(resolvedValue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(resolvedValue) : reject()
    }, Math.random() * 2000)
  })
}

function asyncA() {
  return createAPromise('A')
}

function asyncB() {
  return createAPromise('B')
}

function asyncC() {
  return createAPromise('C')
}

function print(response) {
  console.log(response)
}

// 在这里实现
function responseInOrder() {
  return new Promise((resolve, reject) => {
    let res = []
    asyncA().then(res => {})
  })
}
//除了构造函数 什么时候用super  可让子类函数访问父类prototype的方法
const promiseA = asyncA()
const promiseB = asyncB()

// promiseA promiseB  promiseC  ,并发调用，尽早响应，且顺序打出A,B,C
//primise 常用api
// export的几种形式
// export {
//   constA,
//   constB
// }
// 等同于 export  constA  export constB
//es6新增array语法，背熟所有新增！
promiseA
  .then(resA => {
    print(resA)
    return promiseB
  })
  //此时resB不是prmiseB对象，return后面跟primse会等待它
  .then(resB => {
    print(resB)
    return promiseC
  })
