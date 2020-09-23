/*
 * @Author: yangtianbo5
 * @Date: 2020-09-22 14:42:44
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 14:48:01
 */
let imgList = document.querySelectorAll('img')
let len = imgList.length

let lazyLoad = (function () {
  let count = 0
  return function (args) {
    let del = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src
        del.push(index)
        count++
        if (count === len) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    imgList = imgList.filter((_, index) => !del.includes(index))
  }
})()
