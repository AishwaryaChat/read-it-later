const Users = require('../models/users')

// Adding a User
exports.addUser = (req, res) => {
  Users.create({
    name: req.body.first_name + ' ' + req.body.last_name,
    emailID: req.body.email_id,
    password: req.body.password
  }, (err, response) => {
    if (err) {
      res.send({err})
    } else {
      res.send({message: 'OK'})
    }
  })
}

// User authentication
exports.checkUser = (req, res) => {
  Users.findOne({'emailID': req.body.email_id}, 'password -_id', (err, resp) => {
    if (resp.password === req.body.password) {
      res.send({message: 'OK'})
    } else {
      res.send({err})
    }
  })
}
