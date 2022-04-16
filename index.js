// 这是包的入口文件
// 导入模块dataFormate
const date = require('./dateFormate')
//  导入模块htmlEscapse
const escapse= require('./htmlEscape')


// 向外暴露需要的成员
module.exports = {
    // ...展开运算符把这个对象的值交割这个新对象
     ...date,
     ...escapse

}