//引入events模块
var events = require('events');
//创建eventEmitter对象
var EventEmitter = events.EventEmitter;
var eventEmitter = new EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
     console.log("连接成功。");
     eventEmitter.emit('data_received');
};
//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function () {
    console.log("数据接收成功。");
});

//触发connection事件
eventEmitter.emit('connection');
console.log("程序执行完毕");

//eventEmitter为事件someEvent注册了两个事件监听器，然后触发了someEvent事件
eventEmitter.on("someEvent",function (arg1,arg2) {
    console.log("listener1",arg1,arg2);
});
eventEmitter.on("someEvent",function (arg1,arg2) {
    console.log("listener2",arg1,arg2);
});
eventEmitter.once("someEvent",function (arg1,arg2) {
    console.log("我注册的是once,只执行一次，执行一次之后就自动关闭掉了；你看这里触发两次事件但是我只执行第一次。",arg1,arg2);
});
console.log("eventEmitter为事件someEvent注册了两个事件监听器，然后触发了someEvent事件");
eventEmitter.emit("someEvent","arg1参数1","arg2参数2");
eventEmitter.emit("someEvent","arg1参数1","arg2参数2");

//EventEmitter定义了一个特殊的事件error,它包含了错误的语义，我们在遇到异常的时候通常会触发error事件。
//当error被触发时，EventEmitter规定如果没有响应的监听器，Node.js会把它当做异常，退出程序并输出错误信息。
//我们一般要为会触发error事件的对象设置监听器，避免遇到错误 后整个程序崩溃。
eventEmitter.on("error",function () {
    console.log("error程序正在进行中，如果把我删除，则会触发系统自带的error程序");
});
eventEmitter.emit("error","arg1参数1","arg2参数2");