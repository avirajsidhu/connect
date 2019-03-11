const mysql = require('mysql');

const {
  dbConfig
} = require('../config.js');

const connection = mysql.createConnection(dbConfig);
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");
} else {
    console.log("Error connecting database ... ");
}
});

const authenticateLogin = (userName, password, callback) => {
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password], function(error,response){
    if ( !error ) {
      if ( response[0]) {
        callback("True");
      }
      else {
        callback("False");
      }
    }
    else {
      callback("False");
    }
  });
}

// const login = (req, res) => {
//   var userName = req.body.userName;
//   var password = req.body.password;
//   connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [userName, password], function(error,response){
//     if ( !error ) {
//       if ( response[0]) {
//         console.log("success");
//         res.send({ result:'success'});
//       }
//       else {
//         res.send({redirect:'/',result:'invalid'});
//         console.log("Incorrect password");
//       }
//     }
//     else {
//       console.log(error);
//     }
//   });
// }

const insertDBUsers = (name, userName, email, password, dateTimeStamp,callback) => {
	connection.query('INSERT INTO users values (?,?,?,?,?)',[name, userName, email, password, dateTimeStamp],function(err,res) {
		if(err){
      if(err.code=="ER_DUP_ENTRY") {
          callback("Duplicate");
      }
      else {
          console.log(err);
          callback("False");
      }
    }
    else {
      callback("True");
    }
  });
}

const insertDBFeed = (userName, pictures, dateTimeStamp, callback) => {
  connection.query('INSERT INTO feed values (DEFAULT,?,?,?)',[userName, pictures, dateTimeStamp],function(err,res) {
    if(err){
      console.log(err);
      callback("False");
    }
    else {
      callback("True");
    }
  });
}

module.exports = {
  authenticateLogin,
  insertDBUsers,
  insertDBFeed
}
