let Streams = function(client) {
  this.client = client
}

Streams.prototype.getAll = function() {
  return this.client.axios
  .get('/streams')
  .then(response => response.data.resources)
}

Streams.prototype.get = function(streamId) {
  return this.client.axios
  .get(`/streams/${streamId}`)
  .then(response => response.data.resource)
}

module.exports = Streams
