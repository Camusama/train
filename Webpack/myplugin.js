class CssPathTransfor {
  // 构造方法
  // Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；
  // Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。
  // Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。
  apply(compiler) {
    // 有一些编译插件中的步骤是异步的，这样就需要额外传入一个 callback 回调函数，并且在插件运行结束时，_必须_调用这个回调函数。
    compiler.plugin('emit', (compilation, callback) => {
      console.log('--CssPathTransfor emit')
      console.log(compilation.assets)
      // console.log(assets);

      // 遍历所有资源文件
      for (var filePathName in compilation.assets) {
        // 查看对应的文件是否符合指定目录下的文件
        if (/static\/css\/pages/i.test(filePathName)) {
          // 引入路径正则
          const reg = /\/static\/css\/vendor\.wxss/i
          // 需要替换的最终字符串
          const finalStr = '/subPages/enjoy_given/static/css/vendor.wxss'
          // 获取文件内容
          let content = compilation.assets[filePathName].source() || ''

          content = content.replace(reg, finalStr)
          // 重写指定输出模块内容
          compilation.assets[filePathName] = {
            source() {
              return content
            },
            size() {
              return content.length
            },
          }
        }
      }
      callback()
    })
  }
}
module.exports = CssPathTransfor
