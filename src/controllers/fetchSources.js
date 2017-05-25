const Sources = require('../models/sources')

exports.get = (req, res) => {
  Sources.find()
  .then((data) => fetchSources(data, req.params.cat, res))
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
}

const fetchSources = (data, cat) => {
  return new Promise(
    (resolve, reject) => {
      resolve(
          data.filter((src) => {
            return (src.category === cat) // End if
          }) // End filter
        ) // End resolve
      reject(new Error('No sources matched'))
    }
  ) // End Promise
}
