var express = require('express');
var app = express();
var bodyParser = require("body-parser");

//TODO 删除这个无法获取body,创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.get('/indexPost.html',function (req,res) {
    res.sendFile(__dirname + '/indexPost.html');
});

app.post("/process_post",urlencodedParser,function (req,res) {
    var responseJson = {
        firstName:req.body.first_name,
        lastName:req.body.last_name
    }
    console.log(responseJson);
    res.end(JSON.stringify(responseJson));
});

var server  = app.listen(8088,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为http://%s:%s",host,port);
});