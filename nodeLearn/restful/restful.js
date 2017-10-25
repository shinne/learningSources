var express = require('express');
var app = express();

var fs = require('fs');
var bodyParser = require("body-parser");
//TODO 删除这个无法获取body,创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + 'users.json', function (err, data) {
        res.writeHead(200, {
            "Content-Type": 'text/html;charset=utf-8'
        });
        res.end(data);
    });
});

app.get('/addUser.html', function (req, res) {
    fs.readFile(__dirname + '/' + 'addUser.html', function (err, data) {
        res.end(data);
    });
});

app.post('/addUser', urlencodedParser, function (req, res) {
    fs.readFile(__dirname + '/' + 'users.json', function (err, data) {
        var user = {
            name: req.body.name,
            password: req.body.password
        };
        data = JSON.parse(data);
        data.push(user);
        data = JSON.stringify(data);
        fs.writeFile(__dirname + '/users.json', data, function (err, data) {
            res.writeHead(200, {
                "Content-Type": 'text/html;charset=utf-8'
            });
            res.end("添加账号成功");
        })
    });
});

app.get('/delUser/:id', function (req, res) {
    fs.readFile(__dirname + "/users.json", function (err, data) {
        data = JSON.parse(data);
        data.splice(req.params.id,1);
        data = JSON.stringify(data);
        fs.writeFile(__dirname + "/users.json", data, function (err, data) {
            res.writeHead(200, {
                "Content-Type": 'text/html;charset=utf-8'
            });
            res.end("删除账号成功");
        });
    });
    console.log(req.params.id);
});


var server = app.listen(8085, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("目前正在访问的地址为 http://%s:%s", host, port)
});