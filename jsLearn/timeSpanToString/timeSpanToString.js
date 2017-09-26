function timeSpanToString(date){
    var year = date.getFullYear();
    //这里转换是只需要对month+1,其他的不做特殊处理
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    day = day<10 ? "0" + day:day;
    hour = hour<10 ? "0" + hour:hour;
    minute = minute<10 ? "0" + minute:minute;
    second = second<10 ? "0" + second:second;
    var time = year + "-" + month + "-" + day + " " + hour + ":" + minute  + ":" + second;
    return time;
}