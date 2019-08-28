安装
1 兼容性
  Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

2 在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告。
  开发版本有完全的警告和调试模式，而在生产版本上除去了警告。
  开发环境/生产环境模式是硬编码好的：开发环境下用未压缩的代码，生产环境下使用压缩后的代码

介绍
1 Vue 是一套用于构建用户界面的渐进式框架

Vue实例
1 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的
2 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)
3 生命周期钩子的 this 上下文指向调用它的 Vue 实例
4 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例

模板语法
1 v-once指令，能执行一次性的差值，但数据改变时，插值处的内容不会跟新但这会影响到该节点上的其他数据绑定
2 v-html
3 v-bind   缩写 v-bind: ---> :
4 v-on     缩写 v-on: --->@
5 修饰符   是以半角句号 . 指明的特殊后缀，用于指出一个指令已改一热书方式绑定

计算属性和侦听器
1 计算属性computed  对于任何复杂逻辑，你都应当使用计算属性
2 方法methods
3 侦听属性watch
4 计算属性setter
5 侦听器

Class与Style绑定

表单输入绑定
v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

组件基础
1.组件可以进行任意次的重复使用，而且相互之间都是独立的
2.可以通过prop向子组件传递数据
3.单个根元素-实现复杂的组件
4.通过事件向父级组件发送消息

组件注册
1.组件名   自定义组件名 当使用 kebab-case (短横线分隔命名) 当使用 PascalCase (驼峰式命名)
2.全局注册
3.局部注册
4.模块系统

prop

自定义事件
