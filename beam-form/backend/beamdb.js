var mysql = require('mysql');

var connection =
mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "GoBears123",
  database: 'beamForm_intake'
});

connection.connect(function(err) {
  if(err){
    console.log(err.code);
    console.log(err.fatal);
  }
  console.log('Connected');
});

// $query = 'SELECT * from wp_user LIMIT 10';

// connection.query($query, function(err, rows, fields) {
//   if(err){
//     console.log("An error occured performing the query.");
//     return;
//   }

//   console.log("Query successfully executed:", rows);
// });

// connection.end(function(){

// });




