var http = require('http');
var url = require('url');
var util = require('util');
//TODO 浏览器访问http://localhost:3000/yoyo?user=shinneyou&url=我是一个网址
http.createServer(function (req,res) {
   res.writeHead(200,{
       'Content-Type':'text/html;charset=utf-8',
       'testHead':'testHeadContent'
   });
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    console.log(params);
    res.write('<h3>下面是展示的内容</h3>');
    res.write("网站名：" + params.user);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3000);