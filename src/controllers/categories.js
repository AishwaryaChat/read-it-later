const Sources = require('../models/sources')

exports.get = (req, res) => {
  Sources.distinct('category')
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
}
