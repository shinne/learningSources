var express = require('express');
console.log(express);
var app = express();
//主页输出'Hello World'
app.get('/',function (req,res) {
    console.log("主页GET请求");
    res.send("Hello GET");
});

//post请求
app.post("/",function (req,res) {
   console.log("主页POST请求");
   res.send("Hello POST");
});

//del_user页面响应
app.get('/del_user',function (req,res) {
    console.log("/del_user响应DELETE请求");
    res.send("删除页面");
});

//list_user页面GET请求
app.get("/list_user",function (req,res) {
    console.log('/list_user GET请求');
    res.send("用户列表页面");
});

//对页面abcd,abxcd，ab123cd等正则响应GET请求
app.get("/ab*cd",function (req,res) {
    console.log("/ab*cd GET请求");
    res.send("正则匹配");
});

var server = app.listen(8089,function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("应用实例，访问地址为http：//%s:%s",host,port);
});