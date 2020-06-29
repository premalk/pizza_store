const Store = require('../models/store.model.js');
exports.addUserAndOrder = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  Store.addUserAndOrder(req.body, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
exports.addUser = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  Store.addUsers(req.body, (err, data)=>{
    if(err) {
      console.log(err);
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
exports.addOrder = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  Store.addOrder(req.body, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
exports.updateUserPreferences = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  Store.updateUserPreferences(req.body, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
exports.loginAuthenticate = (req, res) => {
  if(!req.body) {
    res.status(400).send({
      msg:'Content cant be empty'
    });
  }
  Store.loginAuthenticate(req.body, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
exports.allUsers = (req, res) => {
  Store.allUsers(req.body, (err, data)=>{
    if(err) {
      res.status(500).send({
        msg:
        err.message
      }); 
    } else res.send(data);
  });
};
