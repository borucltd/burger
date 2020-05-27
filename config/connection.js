const mysql = require('mysql');


// define connection with SSL
const connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  port     : process.env.RDS_PORT,
  password : process.env.RDS_PASSWORD,
  database : process.env.RDS_DATABASE,
  ssl      : 'Amazon RDS'
});


// functions
connection.connect(function (error) {
  if (error) {
    console.log('error connecting: ' + error.stack);
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});

// exports
module.exports = connection
