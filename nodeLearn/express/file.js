var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require("body-parser");
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array("image"));

app.get('/file.html',function (req,res) {
    res.sendFile(__dirname + "/file.html");
});

app.post('/file_upload',function (req,res) {
    //上传的文件信息
    var des_file = __dirname + '/uploadFile/' + req.files[0].originalname;
    fs.readFile(req.files[0].path ,function (err,data) {
        fs.writeFile(des_file,data,function (err) {
            if(err){
                console.log(err);
            }
            else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname,
                    exInfo:'文件上传成功'
                };
            }
            res.writeHead(200,{'Content-Type':'text/html;charset = utf-8;'});
            res.end(JSON.stringify(response))
        })
    })
});

var server  = app.listen(8083,function () {
    var host = server .address().address;
    var port = server .address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})