console.log("--push--")
var array = [1,2,3]
var res = array.push(4,6)
console.log('直接在原来数组上进行操作')
console.log('返回的是当前数组的长度')
console.log("--push--")


console.log("--pop--")
var array = [1,2,3]
var res = array.pop()
console.log('直接在原来数组上进行操作')
console.log('返回的是pop元素的值')
console.log("--pop--")


console.log("unshift与push相似，只是在数组头上添加数据")
console.log("shift与pop相似，只是在数组头上删除数据")


console.log("--splice--")
var array = [1,2,2,2,5]
var res = array.splice(2,2,3,4)
console.log("直接在元数组上进行操作")
console.log("返回删除的数据")
console.log("--splice--")

console.log('--sort--')
var array = [3,4,5,6,1,2]
var res = array.sort(function (a,b) {
    return a-b
})
console.log("直接在元数组上进行操作,不需要有接收数组")
console.log('--sort--')

console.log('--reverse--')
var array = [1,2,3,4,5]
var res = array.reverse()
console.log('直接在原数组上进行操作，返回操作后的结果数据')
console.log('--reverse--')

console.log('--slice--浅拷贝数组')
var array = [1,2,3,4,5]
var res = array.slice(0,1)
console.log('--slice--')
console.log('--slice--')

console.log('--join--连接数组且可以实现数组扁平化--')
var array = [['liu','23', [1,2,['21','13']]],'test']
var res = array.join()
console.log('--join--连接数组且可以实现数组扁平化--')

console.log('--concat--将多个数组拼接成一个数组')
var array1 = [1,2,3,], array2= [4,5,6]
var res = array1.concat(array2)
console.log('--concat--将多个数组拼接成一个数组')

console.log('--indexOf--寻找数组中是否有该查找元素,严格===')
var array = ['a','b','c']
var res = array.indexOf('a')
console.log('--indexOf--寻找数组中是否有该查找元素，严格===')


console.log('--forEach--')
//用法：接受三个参数，item,index,array(原数组)
//注意：1、无法中途退出循环，只能用return退出本次回调
//2、遍历次数在第一次循环前就确定，如果循环过程中添加数组到原数组，则不会被遍历
console.log('--forEach--')

console.log('--map--')
//用法：与forEach大致相同
//区别：1、forEach直接在原数组上操作，返回undefined;map不改变原数组，返回新数组
console.log('--map--')

console.log('--filter--')
//有一个接受参数，使用中的callback需要return,
console.log('--filter--')

console.log('--every--')
//输入参数与forEach相同，callback中需要return,意为是否每个元素都满足某个条件
console.log('--every--')

console.log('--some--')
//类似every,不同之处在于只要数组有一项满足条件就会返回true
console.log('--some--')

console.log('--reduce--')
//输入为a,b两个元素，可以将多维数组转为一位数组，实现多维数组的叠乘或者叠加
var res = [1,2,3,4].reduce((a,b) => {
    return a*b
})
//res = 24
console.log('--reduce--')


console.log('--find--返回第一个满足条件的元素值')
var res = [1,2,3,4].find((a) => {
    return a > 0
})
//res = 1
console.log('--find--')


console.log('--findIndex--返回第一个满足条件的元素值')
var res = [1,2,3,4].findIndex((a) => {
    return a > 0
})
//res = 0
console.log('--find--')


console.log('--es6 for(let item )')
for(let {a,b} of [{a:0,b:1},{a:2,b:3}]){
    console.log(a,b)
}
//0 1   2 3
//将每个元素都作为let item接收

// push,pop,shift,unshift,filter,sort,forEach,map,every,some,
// concat,slice,splice,join,indexOf,find,findIndex,for(let xx of array)