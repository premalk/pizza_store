module.exports = app => {
  const store = require('../controllers/store.controller.js');
  app.post('/addUserAndOrder', store.addUserAndOrder);
  app.post('/addUser', store.addUser);
  app.post('/addOrder', store.addOrder);
  app.put('/updateUserPreferences', store.updateUserPreferences);
  app.get('/login', store.loginAuthenticate);
  app.get('/allUsers', store.allUsers);
}
