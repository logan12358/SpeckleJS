const { w3cwebsocket: WS } = require('websocket')

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

Streams.prototype.subscribe = function(streamId, messageHandler) {
  ws: new WS(this.client.axios.defaults.baseURL.replace(/^http/, 'ws') + '/?access_token=undefined&stream_id=' + streamId + '&client_id=specklejs'),
  ws.onopen = () => console.log("Websocket Opened!")
  ws.onmessage = ({ data }) => messageHandler(JSON.parse(data))
}

module.exports = Streams
