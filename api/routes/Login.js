var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'm2u3s9mofhfe0aj0',
  password: 'j1zx61veixj51fir',
  database: 'akqd2l4yrrd13wix'
});



/* GET home page. */
router.post('/auth', function(req, res) {
  console.log('posting from log in');
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
      console.log(JSON.stringify({ "success": loggedin}));
      res.end(JSON.stringify({ "success": loggedin}));
    } else {
      loggedin = false;
      res.end(JSON.stringify({ "success": loggedin }));
    }
  });
  
});


router.put('/reg', function(req, res) {
  console.log('registering account');
  var account = req.body.account;
  var password = req.body.pwd;

  var query = "INSERT INTO person (`account`, `password`, `name`, `phone`, `condition`, `address`) \
                VALUES (?, ?, 'NONE', 'NONE', 'NORMAL', 'NONE');"

  con.query(query, [account, password], function(err, r, fields) {
    if (err) {
      console.log(err);
      res.end(JSON.stringify({ "success": false }));
    } else {
      res.end(JSON.stringify({ "success": true }));
    }
  });
});

module.exports = router;
