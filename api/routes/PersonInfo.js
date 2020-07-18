var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
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
