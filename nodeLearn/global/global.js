
console.log(__filename);
console.log(__dirname);

process.on('exit',function (code) {
    setTimeout(function (args) {
        console.log("该代码永远不会执行");
    },0);
    console.log("退出码为：",code);
});
console.log("程序执行结束");