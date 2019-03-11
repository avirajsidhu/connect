"use strict"

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');

const authRoutes = require('./routes/auth.routes.js');

const serverPort = 4000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(fileUpload());



// test route
authRoutes(app);


app.listen(serverPort, (err, res) => {
  console.log({ err, res });
  console.log(`Server running at ${serverPort}`);
});

module.exports = {
  app
}
