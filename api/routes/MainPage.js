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
router.post('/alert', function(req, res) {
  console.log('getting alert data');
  var account = req.body.account;
  var query = "SELECT DISTINCT * FROM \
  (SELECT risky_place.name, risky_place.date \
  FROM \
  (SELECT DISTINCT b.idlocation, l.name, b.`date` \
  FROM beento AS b, (SELECT p.`account` FROM person AS p WHERE p.condition = \"INFECTED\" or p.condition = \"ATRISK\") AS infec, location AS l \
  WHERE b.idperson = infec.account AND l.idlocation = b.idlocation) AS risky_place, beento AS bt \
  WHERE bt.idperson = ? AND bt.idlocation = risky_place.idlocation \
  union all \
  SELECT DISTINCT l.name, e.date \
  FROM \
  (SELECT p.`account` AS pid FROM person AS p WHERE p.condition = \"INFECTED\" or p.condition = \"ATRISK\") AS infec_p, encounter e, location l \
  WHERE e.idperson = ? AND e.other_idperson = infec_p.pid AND e.idlocation = l.idlocation) AS m;"
  con.query(query, [account, account], function(err, r, fields) {
    if (err) {
      console.log(err);
    }
    console.log(r);
    if (r.length > 0) {
      console.log('success')
      res.end(JSON.stringify({ "alert": true }));
    } else {
      res.end(JSON.stringify({ "alert": false }));
    }
  });
  
});


module.exports = router;
