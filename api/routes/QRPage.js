var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const con = mysql.createConnection({
  host: 'x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'm2u3s9mofhfe0aj0',
  password: 'j1zx61veixj51fir',
  database: 'akqd2l4yrrd13wix'
});


// var q3 = "SELECT person.condition FROM person WHERE person.account = ?;"
// con.query(q3, ["alex"], function(err, r, fields) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(r[0].condition);
//     console.log('success');
//   }
// });

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
    var query = "INSERT INTO encounter (idperson, other_idperson, idlocation, date) VALUES(?, ?, ?, DATE(?));"
    con.query(query, [pid, other, lid, date], function(err, r, fields) {
      if (err) {
        console.log(err);
        res.end(JSON.stringify({ "success": false }));
      } else {
        console.log('success');
      }
    });
  var q2 = "INSERT INTO encounter (idperson, other_idperson, idlocation, date) VALUES(?, ?, ?, DATE(?));"
  con.query(q2, [other, pid, lid, date], function(err, r, fields) {
    if (err) {
      console.log(err);
      res.end(JSON.stringify({ "success": false }));
    } else {

      var q3 = "SELECT person.condition FROM person WHERE person.account = ?;"
      con.query(q3, [other], function(err, r, fields) {
        if (err) {
          console.log(err);
          res.end(JSON.stringify({ "success": false }));
        } else {
          var cond = r[0].condition;
          console.log(cond);
          if (cond === "INFECTED" || cond === "ATRISK") {
            res.end(JSON.stringify({ "success": true, "cond": "RISKY"}));
          } else {
            res.end(JSON.stringify({ "success": true, "cond": "SAFE"}));
          }
          
          console.log('success');
        }
      })
    }
  })});
module.exports = router;
