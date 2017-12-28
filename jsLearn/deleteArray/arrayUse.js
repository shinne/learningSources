console.log("from: https://www.cnblogs.com/lzm1989/p/5967815.html")
//shift删除原数组的第一项，返回删除元素的值
var test1 = [1,2,3,4,5];
var b = test1.shift();    //b:1,a:[2,3,4,5]

//unshift将参数添加到原数组开头，并返回数组的长度
var test2 = [1,2,3,4,5];
var b = test2.unshift(-1,0);  //a:[-1,0,1,2,3,4,5] b:7

//pop删除原数组最后一项，返回删除元素的值
var test3 = [1,2,3,4,5];
var b = test3.pop();   //a:[1,2,3,4],b:5

//push将参数添加到原数组末尾，返回数组的长度
var test4 = [1,2,3,4,5];
var b = test4.push(6,7);  //a:[1,2,3,4,5,6,7] b:7

//concat:返回一个新数组，有原始数组和添加数据组合而成
var test5 = [1,2,3,4,5];
var b = test5.concat(6,7); //a:[1,2,3,4,5]  b:[1,2,3,4,5,6,7]

// reverse:将数组返序
var a = [1,2,3,4,5];
var b = a.reverse(); //a:[1,2,3,4,5] b:[5,4,3,2,1]

//sort(orderfunction)：按指定的参数对数组进行排序.item1 > item2降序排列
var a = [1,2,3,4,5];
var b = a.sort(function (item1,item2) {
    return item1 > item2;
});                     //[1,2,3,4,5]

//slice(start,end)返回从原数组汇总指定开始下标到结束下标之间组成的新数组
var a = [1,2,3,4,5];
var b = a.slice(2,4);        //a:[1,2,3,4,5]  b:[3,4]

//join(separator):将数组的元素组成一个字符串，以separator为分隔符
var a = [1,2,3,4,5];
var b = a.join("#"); //a:[1,2,3,4,5],b:1#2#3#4#5

//indexOf,indexOf返回满足的第一个index，否则返回-1
var a = [1,2,3,4,5];
var b = a.indexOf(2);  //b:1
//splice(start,deleteCount,val1,val2,...),从start位置开始删除deleteCount项数据，并从该位置插入val1,val2,...，并返回删除的数据
var a = [1,2,3,4,5];
var b = a.splice(2,2,7); //a:[1,2,5,,7]   b:[3,4]

var a = [1,2,3,4,5];
a.splice(a.length-1,0,6,7);  //a:[1,2,3,4,6,7,5]
var a = [1,2,3,4,5];
a.splice(a.length,6,7);   //a:[1,2,3,4,5,6,7]