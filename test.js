const ityqj = require('./index')
const dtstr = ityqj.dateFormate(new Date())
console.log(dtstr)
const htmlstr ='<h1>你好你好</h1>'
const str = ityqj.htmlEscapse(htmlstr)
console.log(str)