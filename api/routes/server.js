var express = require("express");
var router = express.Router();
const mysql= require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bento',
  });

const util = require('util');
const query = util.promisify(connection.query).bind(connection);
const getStudent = async()=>{
    const [row] = await query('SELECT * FROM cartitem where id = ?', [1]);
    return row;
}
const getAllStudent = async()=>{
    const row = await query('SELECT * FROM cartitem');
    return row;
}

router.get("/", async(req, res) => {
    const rows= await getAllStudent();
    res.send(rows);
    res.end();
});
module.exports = router;