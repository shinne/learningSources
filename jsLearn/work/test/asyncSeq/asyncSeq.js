async function async1() {
    console.log("async1 start");
    await  async2();
    //new promise(async2()) 因此async2方法的执行也是同步的
    console.log("async1 end");

}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log("script end")

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise 2
//settimeout

//这类的执行结果可以用一句话总结，先执行同步代码，遇到异步代码就先加入队列，然后按入队的顺序执行异步代码，最后执行setTimeout队列的代码。

//补充一下队列任务优先级：promise.Trick()>promise的回调>setTimeout>setImmediate