import { bar } from './b.js'
console.log('a start')

export function foo() {
  bar()
  console.log(bar())
  console.log('执行完毕')
}
foo()
console.log('a start')
