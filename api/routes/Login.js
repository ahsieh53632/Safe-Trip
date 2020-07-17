var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
});



con.connect(function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('connected')
    }
  });


/* GET home page. */
router.post('/auth', function(req, res) {
    
  res.render('index', { title: 'Express' });
});

module.exports = router;
