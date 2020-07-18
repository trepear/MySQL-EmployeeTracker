const mysql = require('mysql');
const util = require('util');

// Create connection to mySQL
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ethangirard96",
    database: "tracker_db"
});

connection.query = util.promisify(connection.query)

connection.connect(function (err) {
    if (err) throw err;
    init();
});








