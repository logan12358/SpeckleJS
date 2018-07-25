const axios = require('axios')
const Streams = require('./streams')
const Objects = require('./objects')

let SpeckleClient = function(url, jwt) {
  this.axios = axios.create({
    baseURL: url,
    headers: {
      common: { 'Authorization': jwt }
    }
  })

  this.streams = new Streams(this)
  this.objects = new Objects(this)
}

module.exports = SpeckleClient
