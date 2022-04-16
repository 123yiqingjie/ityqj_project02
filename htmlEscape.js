// 定义转义html字符的函数
function htmlEscapse(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&it;'
            case '>':
                return '&gt;'
            case '"':
                return '&quto;'
            case '&':
                return '&amp:'
        }
    })
}
module.exports={
    htmlEscapse
}