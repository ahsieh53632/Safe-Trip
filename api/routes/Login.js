var express = require('express');
var router = express.Router();
var mysql = require('mysql')


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
});


console.log('correct route');
con.connect(function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
  });


/* GET home page. */
router.post('/auth', function(req, res) {
  console.log('posting from log in')
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
