var urls = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png',
]
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      console.log('一张图片加载完成')
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error('Could not load image at' + url))
    }
    img.src = url
  })
}
function fetch3(arr, fetch) {
  return new Promise(resolve => {
    let urls = arr.slice()
    let count = urls.length
    let res = []
    let getUrl = function () {
      if (!urls.length) {
        return
      }
      let url = urls.shift()
      fetch(url)
        .then(msg => {
          handle(msg)
        })
        .catch(e => {
          handle(e)
        })
        .finally(() => {
          getUrl()
        })
    }

    let handle = function (msg) {
      res.push(msg)
      if (res.length >= count) {
        // console.log(res)
        resolve(res)
      }
    }
    for (let i = 0; i < 3; i++) {
      getUrl()
    }
  })
}
fetch3(urls, loadImg).then(res => {
  console.log('全部完成', res)
})
