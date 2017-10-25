
//从流中读取数据
console.log("从流中读取数据");
var fs = require("fs");
var data = '';

//创建可读流
var readerStream = fs.createReadStream("file.txt");

//设置编码为utf8
readerStream.setEncoding("UTF8");

//处理流事件
readerStream.on('data',function (chunk) {
    console.log(chunk + 'chunk');
    console.log(data + "这里的data是什么？");
    data += chunk;
});

readerStream.on('end',function () {
    console.log(data);
});

readerStream.on('error',function (err) {
    console.log(err.stack);
});

console.log("从流中读取数据");

//写入流
console.log("/////////////写入流////////////");
var fs = require('fs');
var data = "这些数据是我通过stream写入到文件中的";

//创建一个可以写入的流，写到文件output.txt中
var writerStream = fs.createWriteStream("output.txt");

//使用utf8编辑写入数据
writerStream.write(data,'utf8');

//标记文件末尾
writerStream.end();

//处理流事件
writerStream.on('finish',function () {
    console.log("写入完成");
});

writerStream.on('error',function () {
    console.log("error")
});
console.log("////////写入流//////////");