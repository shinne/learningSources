var fs = require("fs");
var data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("在不使用毁掉函数的情况下，先执行读取文件后输出 程序执行结束");

//不阻塞代码实例
console.log("////////////////////////////////////////////")
console.log("使用毁掉函数的情况下")
var fs = require("fs");
fs.readFile('file.txt',function (err,data) {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("在使用毁掉函数的情况下，先执行程序执行结束,并且并行读取文件后输出 ");