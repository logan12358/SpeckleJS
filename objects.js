let Objects = function(client) {
  this.client = client
}

Objects.prototype.get = function(objectId) {
  return this.client.axios
  .get(`/objects/${objectId}`)
  .then(response => response.data.resource)
}

module.exports = Objects
