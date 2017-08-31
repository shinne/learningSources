//考虑兼容性添加捕获事件
function myAddEvent(obj,sEv,fn){
    if(obj.attachEvent){
        obj.attachEvent("on" + sEv,function(ev){

            /*
            IE的this是window
            fn.call(obj)
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
                ev.cancelBubble = true;
                return false;
            }
        });
    }
    else{
        obj.addEventListener(sEv,function(ev){
            if(fn.call(obj) == false){
                console.log("chrome");
                console.log(ev)
                ev.cancelBubble = true;
                ev.preventDefault();
            }
        },false);
    }
}
