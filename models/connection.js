const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog_nodejs"
});

mysqlConnection.connect((error) => {
    if(error) {
        console.log(error);
    }else {
        console.log('Connected database');
    }
});

module.exports = mysqlConnection;