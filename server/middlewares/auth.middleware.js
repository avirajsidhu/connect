"use strict"

const fs = require('fs');

const storeTimestamp = (req, res, next) => {
  const now = Date.now();
  const file = '/home/avirajsidhu/Desktop/timestamp.txt';

  fs.writeFile(file, now, 'utf-8', err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Timestamp saved!');
    }
  });

  next();
}


module.exports = {
  storeTimestamp
}
