// webpack.prod.config.js
module.exports = {
  performance: {
    // 性能设置,文件打包过大时，会报警告
    hints: 'warning',
  },
  output: {
    // 打包时，在包中不包含所属模块的信息的注释
    pathinfo: false,
  },
  optimization: {
    // 不使用可读的模块标识符进行调试
    namedModules: false,
    // 不使用可读的块标识符进行调试
    namedChunks: false,
    // 设置 process.env.NODE_ENV 为 production
    nodeEnv: 'production',
    // 标记块是否是其它块的子集
    // 控制加载块的大小（加载较大块时，不加载其子集）
    flagIncludedChunks: true,
    // 标记模块的加载顺序，使初始包更小
    occurrenceOrder: true,
    // 启用副作用
    sideEffects: true,
    // 确定每个模块的使用导出，
    // 不会为未使用的导出生成导出
    // 最小化的消除死代码
    // optimization.usedExports 收集的信息将被其他优化或代码生成所使用
    usedExports: true,
    // 查找模块图中可以安全的连接到其它模块的片段
    concatenateModules: true,
    // SplitChunksPlugin 配置项
    splitChunks: {
      //按需加载
      // import('../neighbor').then(({ default: component }) => {
      //   setNeighborPage(React.createElement(component))
      // });
      // const Foo = () => import('./Foo.vue')
      //let foor =()=>import('./aa')
      // const router = new VueRouter({
      //   routes: [
      //     { path: '/foo', component: Foo }
      //   ]
      // })
      // component:()=> import(/*webpackChunkName: "users"*/ '@/views/users'),
      // const AsyncComponent = () => ({
      //   // 需要加载的组件 (应该是一个 `Promise` 对象)
      //   component: import('./MyComponent.vue'),
      //   // 异步组件加载时使用的组件
      //   loading: LoadingComponent,
      //   // 加载失败时使用的组件
      //   error: ErrorComponent,
      //   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      //   delay: 200,
      //   // 如果提供了超时时间且组件加载也超时了，
      //   // 则使用加载失败时使用的组件。默认值是：`Infinity`
      //   timeout: 3000
      // })
      // 默认 webpack4 只会对按需加载的代码做分割
      chunks: 'async',
      // 表示在压缩前的最小模块大小,默认值是30kb
      minSize: 30000,
      minRemainingSize: 0,
      // 旨在与HTTP/2和长期缓存一起使用
      // 它增加了请求数量以实现更好的缓存
      // 它还可以用于减小文件大小，以加快重建速度。
      maxSize: 0,
      // 分割一个模块之前必须共享的最小块数
      minChunks: 1,
      // 按需加载时的最大并行请求数
      maxAsyncRequests: 6,
      // 入口的最大并行请求数
      maxInitialRequests: 4,
      // 界定符
      automaticNameDelimiter: '~',
      // 块名最大字符数
      automaticNameMaxLength: 30,
      cacheGroups: {
        // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // 当打包时，遇到错误编译，将不会把打包文件输出
    // 确保 webpack 不会输入任何错误的包
    noEmitOnErrors: true,
    checkWasmTypes: true,
    // 使用 optimization.minimizer || TerserPlugin 来最小化包
    minimize: true,
  },
  plugins: [
    // 使用 terser 来优化 JavaScript
    new TerserPlugin(/* ... */),
    // 定义环境变量
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // 预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。
    // 这样可以确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
