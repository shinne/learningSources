Function.prototype.myBind = function(target) {
    var self = this; // 保存原函数
    var target = target || window;
    //因为arguments是类数组，所以需要调用array的方法
    var args = Array.prototype.slice.call(arguments,1); // 剩余的参数转为数组
    //返回的函数不仅要和被调函数的函数体相同，也要继承人家的原型链
    fBound.prototype = Object.create(self.prototype)
    function fBound () { // 返回一个新函数
        //新建立的函数也会有输入参数,同myBind传入的参数一起组合成函数的入参
        var _args = Array.prototype.slice.call(arguments,0)
        self.apply(this instanceof self ? this : target, args.concat(_args));
    }
    return fBound
}

show.prototype.type = 'dog'

function show(name, age, extra) {
    console.log(extra)
    console.log(this.type + ' ' + name + ' ' + age);
}

var cat = {
    type: 'cat'
};

var bindShow = show.myBind(cat, 'lulu', 17);
bindShow('extra')   //cat lulu 17 extra
new bindShow()  //dog lulu 17


/*

Function.prototype.myBind = function () {
    var context = Array.prototype.shift(arguments)
    var args = Array.prototype.slice.call(arguments)
    var self = this
    realBind.prototype = Object.create(self)
    return realBind = function(){
        var _args = Array.prototype.slice.call(arguments, 0)
        self.apply(this instanceof self ? self:context,context,arg.concat(_args))
    }
}*/
