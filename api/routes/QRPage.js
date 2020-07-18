var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
});


router.post('/beento', function(req, res) {
  var pid = req.body.account;  
  var lid = req.body.locationId;
  var date = req.body.date;
  var query = "INSERT INTO beento (idperson, idlocation, date) VALUES(?, ?, DATE(?))"
  con.query(query, [pid, lid, date], function(err, r, fields) {
    if (err) {
      console.log(err);
      res.end(JSON.stringify({ "success": false }));
    } else {
      res.end(JSON.stringify({ "success": true }));
    }
  });
});

router.put('/encounter', function(req, res) {
    var pid = req.body.account;
    var other = req.body.otherpid  
    var lid = req.body.locationId;
    var date = req.body.date;
    var query = "INSERT INTO encounter (idperson, other_idperson, idlocation, date) VALUES(?, ?, ?, DATE(?))"
    con.query(query, [pid, oterh, lid, date], function(err, r, fields) {
      if (err) {
        console.log(err);
        res.end(JSON.stringify({ "success": false }));
      } else {
        res.end(JSON.stringify({ "success": true }));
      }
    });
  });
module.exports = router;
