var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
//交集
var c = a.filter(function(v){ return b.indexOf(v) > -1 })
//差集
var d = a.filter(function(v){ return b.indexOf(v) == -1 })
//补集
var e = a.filter(function(v){ return !(b.indexOf(v) > -1) })
 .concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))
//并集
var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))

console.log("数组a：", a);
console.log("数组b：", b);
console.log("a与b的交集：", c);
console.log("a与b的差集：", d);
console.log("a与b的补集：", e);
console.log("a与b的并集：", f);