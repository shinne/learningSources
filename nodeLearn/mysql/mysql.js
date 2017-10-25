var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '666666',
    database : 'users'
});

connection.connect();

connection.query('select * from userInfo where id=1', function (error, results, fields) {
    if (error) throw error;
    console.log('The result is: ', results);
});
connection.end();