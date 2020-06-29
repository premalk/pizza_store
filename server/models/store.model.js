const sql = require('../config/db.js');
const Store = function(){};
Store.allUsers = function ({} , result) {
  sql.query(`select email from users`, (err, res)=>{
    if(err) result (err, null);
    result(null, res);
  });
};
Store.addUsers = function(userObj, result) {
  const {
    name,
    email,
    password,
    user_id,
  } = userObj;
  sql.query(`insert into users set user_id='${user_id}', name='${name}', email='${email}', password='${password}'`, (err, res)=>{
    if(err) result(err)
    result(null ,res);
  });
};
Store.addOrder = function (orderObj, result) {
  const {
    order_id,
    order_desc,
    order_date,
    order_amount,
    order_by,
  } = orderObj;
  sql.query(`insert into orders set order_id='${order_id}', order_desc='${order_desc}', order_date='${order_date}', order_amount='${order_amount}', order_by=${order_by}`, (err, res)=>{
    if(err) result(err);
    result(null, res);
  });
};
Store.addUserAndOrder = function (obj, result) {
  const {
    order_id,
    order_desc,
    order_date,
    order_amount,
    order_by,
  } = obj;
  const {
    user_id,
    email,
    password,
    mobile_no,
    name,
    pincode,
    address,
    city,
    country,
  } = obj;
  sql.query(`insert into orders set order_id='${order_id}', order_desc='${order_desc}', order_date='${order_date}', order_amount='${order_amount}', order_by=${order_by}`, (err, res)=>{
    if(err) result(err);
    sql.query(`insert into users set user_id='${user_id}', email='${email}', password='${password}', mobile_no='${mobile_no}', name='${name}', pincode='${pincode}', address='${address}', city='${city}', country='${country}'`, (err2, res2)=>{
      if(err2) result(err2);
      result(null, res2);
    });
    result(null, res);
  });
};
Store.updateUserPreferences = function (obj, result) {
  const {
    mobile_no,
    name,
    pincode,
    address,
    city,
    country,
    email,
  } = obj;
    sql.query(`update users set user_id='${user_id}', email='${email}', password='${password}', mobile_no='${mobile_no}', name='${name}', pincode='${pincode}', address='${address}', city='${city}', country='${country}' where email='${email}'`, (err2, res2)=>{
      if(err2) result(err2);
      result(null, res2);
  });
};
Store.loginAuthenticate = function (obj, result) {
  const {
    email,
    password,
  } = obj;
    sql.query(`select * from users where email='${email}' and password='${password}'`, (err2, res2)=>{
      if(err2) result(err2);
      result(null, res2);
  });
};
module.exports = Store;
