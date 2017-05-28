const Users = require('../models/users')

// Adding a User
exports.addUser = (req, res) => {
  console.log(req.body)
  if (req.body.email_id === '') {
    return res.send({message: 'NO'})
  }
  Users.findOne({'emailID': req.body.email_id}, (err, doc) => {
    if (doc) {
      console.log(doc)
      return res.send({message: 'already'})
    } else if (!doc) {
      createUser(req, res)
    }
    if (err) {
      console.log(err)
      return res.send({err})
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

function createUser (req, res) {
  Users.create({
    name: req.body.first_name + ' ' + req.body.last_name,
    emailID: req.body.email_id,
    password: req.body.password
  }, (err, response) => {
    if (err) {
      console.log(err)
      return res.send({err})
    } else {
      console.log(response)
      return res.send({message: 'OK'})
    }
  })
}
