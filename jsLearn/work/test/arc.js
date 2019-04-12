function arc(startDate, endDate){
    let endTime = new Date()
    let startTime = new Date()
    let startArray = startDate.split(":")
    let endArray = endDate.split(":")
    if(startArray && endArray && startArray.length == 3 && endArray.length == 3){
        startTime = getStamp(startTime,startArray)
        endTime = getStamp(endTime,endArray)
        let secondCount = (endTime - startTime)/1000
        let hourArc = 30*secondCount/(60*60)
        let minuteArc = 6*secondCount/60
        let secondArc = 6*secondCount
        let res = {
            hourArc,
            minuteArc,
            secondArc,
        }
        console.log(res)
        return res
    }
    return -1
}

function getStamp(time,array){
    time.setHours(array[0])
    time.setMinutes(array[1])
    time.setSeconds(array[2])
    return time
}
arc('10:00:00','14:30:00')

