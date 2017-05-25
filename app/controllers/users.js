const Users = require('../models/users')

exports.post = (req, res) => {
  console.log(req.body)
  Users.create({
    name: req.body.first_name + ' ' + req.body.last_name,
    emailID: req.body.email_id,
    password: req.body.password
  }, (err, response) => {
    if (err) {
      res.send(err)
    } else {
      res.send('OK')
    }
  })
}
