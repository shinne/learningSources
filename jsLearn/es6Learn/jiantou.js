function foo() {
    setTimeout(()=>{
        console.log("id:" + this.id);
    },100);
}

function foo2() {
    setTimeout(function () {
        console.log("id:" + this.id);
    },100);
}
var id = 21;
foo.call({id:42});
foo2.call({id:42});
console.log("箭头函数的作用域是定义箭头函数的作用域，与运行时的其他作用域无关");


