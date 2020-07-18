var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
});


/* GET home page. */
router.get('/alert', function(req, res) {
  console.log('getting aler data');
  var account = req.body.account;
  var password = req.body.pwd;
  var loggedin = false
  var query = "SELECT * FROM person WHERE account = ? AND password = ?"
  con.query(query, [account, password], function(err, r, fields) {
    if (err) {
      console.log(err);
    }
    if (r.length > 0) {
      console.log('success')
      loggedin = true;
      console.log(JSON.stringify({ "success": loggedin }));
      res.end(JSON.stringify({ "success": loggedin }));
    } else {
      loggedin = false;
      res.end(JSON.stringify({ "success": loggedin }));
    }
  });
  
});


module.exports = router;
