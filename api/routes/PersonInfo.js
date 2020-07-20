var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'm2u3s9mofhfe0aj0',
  password: 'j1zx61veixj51fir',
  database: 'akqd2l4yrrd13wix'
});

console.log('connect');

/* GET home page. */
router.post('/info', function(req, res) {
  var account = req.body.account;
  console.log(account);
  var query = "SELECT p.name, p.phone, p.address FROM person AS p WHERE p.account = ?;";
  con.query(query, [account], function(err, r, fields) {
    if (err) {
      console.log(err);
      res.end(JSON.stringify(err));
    } else {
      console.log(JSON.stringify(r));
      res.end(JSON.stringify(r));
    }
  });
  
});


module.exports = router;
