var circles = 0
//不是严格2000秒的原因是因为本生cycle执行里面的内容也需要时间,因此用结束时间-开始时间
function cycle(){
    /*var start = new Date()*/
    var i = 0
    while(i < 1000) {
        i++
        circles++
    }
    /*var end = new Date()*/
    setTimeout(cycle,2000/* - (end-start)*/)
}
cycle()



