const Users = require('../models/users')

// Adding a User
exports.addUser = (req, res) => {
  if (req.body.email_id === '') {
    return res.send({message: 'NO'})
  }
  Users.findOne({'emailID': req.body.email_id}, (err, doc) => {
    if (doc) {
      return res.send({message: 'already'})
    } else if (!doc) {
      createUser(req, res)
    }
    if (err) {
      return res.send({err})
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

// User authentication
exports.checkUser = (req, res) => {
  if (req.body.email_id === '' || req.body.password === '') {
    return res.send({message: 'NO'})
  }
  Users.findOne({'emailID': req.body.email_id}, (err, doc) => {
    if (doc) {
      checkPassword(req, res)
    } else {
      return res.send({message: 'not found'})
    }
    if (err) {
      res.send({err})
    }
  })
}

const checkPassword = (req, res) => {
  Users.findOne({'emailID': req.body.email_id}, 'password', (err, resp) => {
    if (resp.password === req.body.password) {
      req.session.user_id = resp._id
      res.send({message: 'OK'})
    } else if (resp.password !== req.body.password) {
      res.send({message: 'not matched'})
    } else {
      res.send({err})
    }
  })
}
