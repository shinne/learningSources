//方法1:创建长度为10字节的Buffer实例
var buf = new Buffer(10);
//方法2：通过给定的数组创建Buffer实例
var buf = new Buffer([10,20,30,40,50]);
//方法3：通过一个字符串来创建Buffer实例
var buf = new Buffer("www.runoob.com","utf-8");

//写入缓冲区，语法  buf.write(string[,offset[,length]][,encoding])
//string-写入缓冲区的字符串
// offset-缓冲区开始写入的索引值，默认为0
//length-写入的字节数，默认为buffer.length
//encoding-使用的编码，默认为uft8
//实例
buf = new Buffer(256);
len = buf.write("www.runoob.com",3,7);
console.log("写入字节数：" + len);

//读取Node缓冲区数据的语法 buf.toString([encoding[,start[,end]]])
buf = new Buffer(26);
for(var i = 0 ; i < 26 ; i++){
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));    // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));  //输出: abcde
console.log(buf.toString("utf8",0,5)); //输出:abcde
console.log(buf.toString(undefined,0,5)); //使用'utf8'编码，并输出:abcde

//将Buffer转换为JSON对象，语法为 buf.toJSON()
console.log("////////////将buffer转换为json对象//////////////");
var buf = new Buffer("www.runoob.com");
var json = buf.toJSON(buf);
console.log(json);
console.log("////////////将json对象转换为buffer//////////////");
console.log(buf.toString('ascii'));

//缓冲区合并的语法  Buffer.concat(list[,totalLength]);
var buffer1 = new Buffer("菜鸟教程");
var buffer2 = new Buffer("www.runoob.com");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 合并的内容：" + buffer3.toString());

//缓冲区比较 buf.compare(otherBuffer);
var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer("ABCD");
var result = buffer1.compare(buffer2);
if(result < 0){
    console.log(buffer1 + "在" + buffer2 + "之前");
}
else if(result == 0){
    console.log(buffer1 + "与" + buffer2 + "相同");
}
else{
    console.log(buffer1 + "在" + buffer2 + "之后");
}

//拷贝缓冲区，语法buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])
var buffer3 = Buffer.concat([buffer1,buffer2]);
var buffer1 = new Buffer('ABC');
//拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 是由buffer1copy过来的，其内容为content:" + buffer2.toString());

//缓冲区裁剪，buf.slice([start[,end]])
var buffer1 = new Buffer("runoob");
//剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content为截取buffer1的0~~2-1的内容：" + buffer2.toString());

//缓冲区长度 buf.length
var buffer = new Buffer("www.runoob.com");
//缓冲区长度
console.log("buffer 的长度length:" + buffer.length);