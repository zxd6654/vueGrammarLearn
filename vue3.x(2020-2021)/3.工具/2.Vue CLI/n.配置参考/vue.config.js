/*
 * @Author: zxd
 * @Date: 2019-09-16 11:24:16
 * @Last Modified by: zxd
 * @Last Modified time: 2019-09-16 17:04:12
 */

//vue.config.js是一个可选的配置文件,如果项目的根目录中存在这个文件,那么他会被@vue/cli-service自动加载 也可以使用package.json中的vue字段
// 详情参考 https://cli.vuejs.org/zh/config/
module.exports = {

    publicPath: '/', //部署应用时的基本URL,在开发环境下依然生效 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径

    outputDir: 'dist', //当运行build时生成的生产环境构建文件的目录,

    assetsDir: '', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。

    indexPath: 'index.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。

    filenameHashing: true, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。

    pages: { //在 multi-page 模式下构建应用。默认是undefined
        index: {
            // 入口文件
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js'
    },

    lintOnSave: true, //是否在开发环境下通过eslint-loader在每次保存时lint代码,当 lintOnSave 是一个 truthy 的值时，eslint-loader 在开发和生产构建下都会被启用。

    runtimeCompiler: false, //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。

    transpileDependencies: [], //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来

    productionSourceMap: true, //如果你不需要生产环境的source map,可以将其设置为false以加速生产环境的构建

    crossorigin: undefined, //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。

    integrity: false, //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。

    configureWebpack: {}, //Object | Function  调整 webpack 配置

    chainWebpack: () => {}, //是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。

    css: {

        modules: false, //v4已经弃用

        requireModuleExtension:true,//默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。

        extract: process.env.NODE_ENV === 'production' ? true : false, //生产环境下是 true，开发环境下是 false   是否将组件中的 CSS 提取至一个独立的 CSS 文件中

        sourceMap: false, //是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能

        loaderOptions: { //向 CSS 相关的 loader 传递选项。

            css: {}, // 这里的选项会传递给 css-loader

            postCss: {},

            sass: {},

            less: {},

            stylus: {},
        },
    },

    devServer: {

        open: true, //告诉dev-server在服务器启动后打开浏览器。

        host: '127.0.0.1',

        port: 3000,

        https: false,

        hotOnly: false,

        proxy: { // 将任何未知请求 (没有匹配到静态文件的请求) 代理到该字段指向的地方
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }

        },

        before: app => {}, //提供在服务器内部的所有其他中间件之前执行自定义中间件的能力。
    },

    parallel: require('os').cpus().length > 1, //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建

    pwa: {}, //向 PWA 插件传递选项。

    pluginOptions: {}, //这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
}
