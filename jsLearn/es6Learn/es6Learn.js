//let & var
console.log("hello node");
var array = [1,2,3,4];
for(var j = 0 ; j < array.length ; j ++){
    console.log(array[j]);
}
console.log(j);
console.log("for循环中使用var则是全局变量，在for循环之后还能使用j");
for(let i = 0 ; i < array.length ; i ++){
    console.log(array[i]);
}
console.log("for循环中使用let i为局部变量，因此之后输出console.log(i)则会出现undefined");
/*console.log(i);*/

console.log("变量的解构赋值");
let [a,[b,c]] = [1,[2,3]]
console.log([a,[b,c]]);
