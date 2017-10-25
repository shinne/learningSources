//node提供了exports和require两个对象，其中exports是模块公开的接口，
//require用于从外部获取一个模块的接口，即所获取模块的exports对象
//第一种通过exports对象把world作为模块的访问接口
/*exports.world = function () {
    console.log("you are beautiful");
};*/

//第二种把一个对象封装到模块中，格式如下
/*
module.exports = function () {

};*/
//例如
function  Hello(name) {
    this.name = name;
}
Hello.prototype = {
    constructor:Hello,
    getName:function () {
        console.log(this.name);
    }
};

module.exports = Hello;