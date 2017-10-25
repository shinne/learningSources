//TODO util.inherits

var util = require("util");
function Base() {
    this.name = "base";
    this.birth = "1991";
    this.sayHello = function () {
        console.log("hello",this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log("/////////////////下面是sub类的输出/////////////////");
var objSub = new Sub();
objSub.showName();
//TODO   objSub.sayHello()该方法为不存在
//objSub.sayHello();
console.log("/////////////////下面是输出Base和Sub的对比/////////////////")
console.log("Base");
console.log(objBase);
console.log("Sub");
console.log(objSub);
//TODO 我们定义了一个基础对象Base和一个继承自Base的sub，Base有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits实现继承
//TODO inherit 继承

//TODO inspect
//这里是inspect，它可以将任意对象转换为字符串，通常用于调试和输出错误。
console.log('////////////////inspect///////////////////');
var util = require('util');
function Person() {
    this.birth = 'byvoid';
    this.toString = function() {
        return this.birth;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));