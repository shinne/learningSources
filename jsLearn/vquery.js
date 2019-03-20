//考虑兼容性添加捕获事件
function myAddEvent(obj,sEv,fn){
    if(obj.attachEvent){
        obj.attachEvent("on" + sEv,function(){

            /*
            IE的this是window
            这里用来解决this问题
            这里用来解决this问题
            这里用来解决this问题
            这里用来解决this问题
            */

            /*
            用来解决阻止默认事件
            用来解决阻止默认事件
            阻止冒泡事件
            */
            if(false == fn.call(obj)){
                event.cancelBubble = true;
                return false;
            }
        });
    }
    else{
        obj.addEventListener(sEv,function(ev){
            if(fn.call(obj) == false){
                ev.cancelBubble = true;
                ev.preventDefault();
            }
        },false);
    }
}

//从母体中找出目标class
function getByClass(oParent,sClass){
    var aResult = [];
    var aObject = document.getElementsByTagName("*");
    for(var i = 0 ; i < aObject.length ; i ++){
        if(aObject[i].className == sClass){
            aResult.push(aObject[i]);
        }
    }
    return aResult;
}

//目标函数的样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}


function getIndex(obj){
    var aBrother = obj.parentNode.children;
    for(var i = 0 ; i < aBrother.length ; i ++){
        if(aBrother[i] == obj){
            return i;
        }
    }
}


//数组和conllection之间的拼接
function appendArr(arr1,arr2){
    for(var i = 0 ; i < arr2.length ; i ++){
        arr1.push(arr2[i]);
    }
    return arr1;
}
function VQuery(vArg){
    this.elements = [];
    switch(typeof vArg){

        //如果是函数
        case 'function':
            myAddEvent(window,"load",vArg);
            break;

        //如果是字符串
        case 'string':
            switch(vArg.charAt(0)){
                //id选择器
                case '#':
                    var element = document.getElementById(vArg.substring(1));
                    this.elements.push(element);
                    break;
                //类选择器
                case '.':
                    this.elements = getByClass(document,vArg.substring(1));
                    break;
                //标签选择器
                default :
                    this.elements = document.getElementsByTagName(vArg);

            }
            break;
        case 'object':
            this.elements.push(vArg);
            break;
    }
}


//在原型里面添加click函数
VQuery.prototype.click = function(fn){
    for(var i = 0 ; i < this.elements.length; i ++){
        myAddEvent(this.elements[i],"click",fn);
    }
};



//在原型里面添加show函数
VQuery.prototype.show = function(){
    for(var i = 0 ; i < this.elements.length; i ++){
        this.elements[i].style.display = "block";
    }
    return this;
};

//在原型里面添加hide函数
VQuery.prototype.hide = function(){
    for(var i = 0 ; i < this.elements.length; i ++){
        this.elements[i].style.display = "none";
    }
    return this;
};

//在原型里面添加hover函数
VQuery.prototype.hover = function(fnOver,fnOut){
    for (var i = 0 ; i < this.elements.length ; i++) {
        myAddEvent(this.elements[i],"mouseover",fnOver);
        myAddEvent(this.elements[i],"mouseout",fnOut);

    }
    return this;
}

//在原型里面添加css函数
VQuery.prototype.css = function(attr,value){

    if(arguments.length == 2){
        for (var i = 0 ; i < this.elements.length ; i++) {
            this.elements[i].style[attr] = value;
        }
    }

    else{
        if(typeof attr == "string")
        {
            /*	console.log(getStyle(this.elements[0],attr));*/
            return getStyle(this.elements[0],attr);
        }
        else{
            for (var i = 0 ; i < this.elements.length ; i++) {
                for(var j in attr){
                    console.log(j);
                    this.elements[i].style[j] = attr[j];
                }
            }
        }
    }
    return this;

}



////222222在原型里面添加toggle函数,注意局部变量和arguments
VQuery.prototype.toggle = function(attr,value){
    //保存arguments
    var _arguments = arguments;
    for (var i = 0 ; i < this.elements.length ; i++) {
        addToggle(this.elements[i]);
    }

    function addToggle(obj){
        var count = 0 ;
        myAddEvent(obj,"click",function(){
            console.log("测试" + count);
            /*
            保持this环境一直是obj
            保持this环境一直是obj
            保持this环境一直是obj
            */
            _arguments[count % _arguments.length].call(obj);
            count++;

        });

    }
    return this;
}

//222222222在原型里面添加attr函数
VQuery.prototype.attr = function(attr,value){

    if(arguments.length == 2){
        for (var i = 0 ; i < this.elements.length ; i++) {
            this.elements[i][attr] = value;
        }
    }

    else{
        return this.elements[0][attr];
    }
    return this;
}

//3333在原型里面添加eq函数
VQuery.prototype.eq = function(i){

    return $(this.elements[i]);
}


//3333在原型里面添加find函数
VQuery.prototype.find = function(str){
    var aResult = [];

    for(var i = 0 ; i < this.elements.length ; i ++){
        switch(str.charAt(0)){
            case ".":
                var aEle = getByClass(this.elements[i],str.substring(1));
                aResult = appendArr(aResult,aEle);
                break;
            default:
                var aEle = this.elements[i].getElementsByTagName(str);
                /*aResult.concat(aEle);*/
                //不能用上面那种,因为aEle返回的是collection
                aResult = appendArr(aResult,aEle);

        }
    }

    var newV = $();
    newV.elements = aResult;
    return newV;
}

//3333在原型里面添加find函数
VQuery.prototype.index = function(){
    return getIndex(this.elements[0]);

}


//444444在原型里面添加bind函数
VQuery.prototype.bind = function(sEv,fn){
    for(var i = 0 ; i < this.elements.length ; i ++){
        console.log(this.elements[i]);
        myAddEvent(this.elements[i],sEv,fn);
    }

}

VQuery.prototype.extend = function(sFn,fn){
    VQuery.prototype[sFn] = fn;
}

//省去 new VQuery的写法
function $(vArg){
    return new VQuery(vArg);
}