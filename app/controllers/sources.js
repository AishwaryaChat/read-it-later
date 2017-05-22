const Sources = require('../models/sources')
const fetch = require('node-fetch')

exports.get = (req, res, next) => {
  fetch('https://newsapi.org/v1/sources?language=en')
  .then((response) => response.json())
  .then((response) => loadSources(response))
  .then((response) => res.send(response))
  .catch((err) => res.send(err.toString()))
}

// ********************************************
// Helper Functions not Exported - Load Sources
// ********************************************

const loadSources = (data) => {
  console.log('running load sources function')
  return new Promise(
    (resolve, reject) => {
      if (data.sources.length > 0) {
        console.log('New sources data available')
        resolve(
          Sources.remove({}, (err, count) => {
            if (err) return err
            console.log('The sources are deleted')
          })
          .then(() => {
            data.sources.forEach((src) => { // forEach
              writeSources(src)
            }) // End ForEach
            return ('Sources written to DB')
          })
          .catch((err) => err)
        )
        reject(new Error('Sources does not have new data'))
      } // end of if
    }
  ) // Promise close
} // load sources close

const writeSources = (src) => {
  Sources.create({
    id: src.id,
    name: src.name,
    description: src.description,
    url: src.url,
    category: src.category,
    language: src.language,
    country: src.country,
    urlsToLogos: {
      small: src.urlsToLogos.small,
      medium: src.urlsToLogos.medium,
      large: src.urlsToLogos.large
    },
    sortBysAvailable: src.sortBysAvailable,
    fetchdata: false
  }
  , (err, src) => {
    if (err) return err
    return 'Sources:' + src.name
  } // callback close
  ) // create close
} // write sources close
