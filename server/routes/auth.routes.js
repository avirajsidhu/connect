"use strict"

const {
  authenticate,
  welcome,
  signUp,
  login,
  createFeed
} = require('../controllers/auth.controller.js');

const {
  storeTimestamp
} = require('../middlewares/auth.middleware.js');

// const {
//   login
// } =require('../helpers/db.helpers.js');

module.exports = (app) => {
  app.get('/', storeTimestamp, authenticate);
  app.get('/welcome', welcome);

  app.post('/login', login);
  app.post('/signup', signUp);
  app.post('/createpost', createFeed);

};
