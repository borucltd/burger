const mysql = require('mysql');

// define connection with SSL
const connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME || 'employeedb.cp4ki52legr7.ap-southeast-2.rds.amazonaws.com',
  user     : process.env.RDS_USERNAME || 'burger_admin',
  port     : process.env.RDS_PORT || 3306,
  password : process.env.RDS_PASSWORD || ']t-7yYD/-b]*gs`t',
  database : process.env.RDS_DATABASE || 'burger_db',
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
