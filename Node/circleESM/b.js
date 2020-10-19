import { foo } from './a.js'
console.log('b start')
export function bar() {
  if (Math.random() > 0.5) {
    foo()
  }
}
console.log('b end')
