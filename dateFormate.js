// 定义格式化的时间函数
function dateFormate(datestr) {
    const dt = new Date(datestr)
    const y = dt.getFullYear()
    const m = padzero(dt.getMonth() + 1)
    const d = padzero(dt.getDate())
    const hh = padzero(dt.getHours())
    const mm = padzero(dt.getMinutes())
    const ss = padzero(dt.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padzero(n) {
    return n > 9 ? n : '0' + n
}
module.exports={
    dateFormate 
}