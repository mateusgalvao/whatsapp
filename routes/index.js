var express = require('express');
var router = express.Router();
var Users = require('../db')

/* GET home page. */
router.get('/', async (req, res) => {
  const db = require("../db");
  const Users = db.Mongoose.model('clientes_users', db.UserSchema, 'clientes_users');
 
  const docs = await Users.find({whatsapp:{$exists: true}}).lean().exec();
  res.render('index', { docs });

});

module.exports = router;
