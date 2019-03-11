"use strict"

const {
  authenticateLogin,
  insertDBUsers,
  insertDBFeed
} = require('../helpers/db.helpers.js');

const authenticate = (req, res) => {
    res.status(200).json({ message: 'welcome to our upload module apis' });
}

const welcome = (req, res) => {
    res.status(200).json({ message: 'welcome to our upload module apis 2' });
}

const signUp = (req, res) => {
  var name = req.body.name;
  var userName = req.body.userName;
  var email = req.body.email;
  var password = req.body.password;
  var dateTimeStamp = new Date();
  insertDBUsers(name, userName, email, password, dateTimeStamp, function (string) {
    if ( string == "True") {
      console.log('Insertion succesfull');
      res.send({ result: 'success' });
    }
    else if ( string == "Duplicate" ) {
      console.log("User already registered");
      res.send({ result: 'invalid' });
    }
    else {
      console.log("Insertion failed");
      res.send({ result: 'Insertion Failed' });
    }
  });
}

const createFeed = (req, res) => {
  var userName = req.body.userName;
  var pictures = req.body.pictures;
  var dateTimeStamp = new Date();
  insertDBFeed(userName, pictures, dateTimeStamp, function (string) {
    if (string == "True"){
      console.log('Insertion succesfull');
      res.send({ result: 'success' });
    }
    else {
      console.log('Insertion Failed');
      res.send({ result: 'invalid' });
    }
  });
}

const login = (req, res) => {
  var userName = req.body.userName;
  var password = req.body.password;
  authenticateLogin(userName, password, function (string) {
    if ( string == "True") {
      console.log("success");
      res.send({ result: 'success' });
    }
    else {
      console.log("Incorrect password");
      res.send({ result: 'invalid' });
    }
  });
}

module.exports = {
  authenticate,
  welcome,
  signUp,
  login,
  createFeed
}
