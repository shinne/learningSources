//原型链继承
function parent(attr){
    this.attr = attr
    this.array = [0,1,2]
}
function child(){
}
child.prototype = new parent()  //1、原型中的引用对象是供所有的实例共享的 2、创建原型时无法向父级传递参数


//构造函数继承
//原型链继承
function parent(attr){
    this.attr = attr
    this.array = [0,1,2]
}
function child(){
    parent.call(childAttr)   //1、子类无法访问父级的prototype
}


//原型链和构造函数组合继承
function parent(attr){
    this.attr = attr
    this.array = [0,1,2]
}
function child(){
    parent.call(childAttr)
}
child.prototype = new Parent()
child.prototype.constructor = child     //可以实现继承，但是会调用两次parent函数，一次是构造函数中调用父类函数，一个是子类原型指向父级实例时


// 寄生时继承
function inheritate(child,parent){
    var prototype = Object.create(parent.prototype)
    prototype.constructor = child
    child.prototype = prototype
}
function parent(attr){
    this.attr = attr
    this.array = [0,1,2]
}
function child(){
    parent.call(childAttr)
}
inheritate(child,parent)      //完美实现，这个时候只需要调用一次父级的构造函数


//es6继承
class cat extends animal(){
    constructor(){
        super()     //相当于 animal.prototype.constructor.call(this)
        this.attr = attr
    }
}

//es5与es6继承的区别在于:
// es5是在构造函数中自己new一个实例，再把父级的属性赋于子类的this之上。
// es6constructor本生没有this实例，是需要调用父级的constructor创建实例，然后在constructor中将this转换为子类的this


