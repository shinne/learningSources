// 数字转千分位
// array迭代方法实现
function reduceToThousand(num) {
    var str = num+'';
    // ["8", "7", "6", "5", "4", "3", "2", "1"]
    return str.split("").reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev;
})
}
console.log('reduce')
console.log(reduceToThousand(123456789));

// str方法实现
function numToThousand(num){
    num = num + ''
    let str = ''
    num.split('').reverse().forEach((item,index,array) => {
        if((index+ 1)%3 == 0 && index !== 0 && index !== (array.length - 1)){
            str = "," + item + str
        }
        else{
            str = item + str
    }
    })
    return str
}
console.log('str')
console.log(numToThousand(123456789))

function regToThousand(num){
    return (num + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
console.log('regRes')
console.log(regToThousand(123456789))