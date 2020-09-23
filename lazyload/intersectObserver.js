/*
 * @Author: yangtianbo5
 * @Date: 2020-09-22 14:49:33
 * @Description:
 * @LastEditors: yangtianbo5
 * @LastEditTime: 2020-09-22 14:52:45
 */
let imgList = document.querySelectorAll('img')
let LazyLoad = function () {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
      if (i.intersectionRatio > 0) {
        i.target.src = i.target.dataset.src
        observer.unobserve(i.target)
      }
    })
  })
  imgList.forEach((i) => {
    observer.observe(i)
  })
}
