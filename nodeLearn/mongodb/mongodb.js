var mongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/dbShinne1';

var insertData = function (db,callback) {
    //连接到表sit
    var collection = db.collection("users");

    //插入数据
    var data= [{name:"insert from node",age:26}];
    //这里插入一些数据
    collection.insert(data,function (err,result) {
       if(err){
           console.log("Error:" + err);
           return;
       }
       callback(result);
    });
    //这里是删除表里的一些东西
    collection.deleteMany({age:22},function () {
        //这里是通过某些限制条件查找数据的api
        collection.find().toArray(function (err,docs) {
            callback(docs);
        });
    });

}
console.log(mongoClient);
mongoClient.connect(DB_CONN_STR,function (err,db) {
   console.log("连接成功");
   insertData(db,function (res) {
       console.log(res);

   })
});
