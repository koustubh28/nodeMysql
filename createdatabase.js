var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

con.connect(function(err) {
  if (err) {
  	console.log('Error Connecting !');
  }
  console.log('Connected');

  con.query("CREATE DATABASE myDatabase",function(err,result) {
  	if(err){
  		console.log("Error in creating database");
  	}
  	console.log("Database Created");
  });
});
