# SpeckleJS

> An unofficial, very-much WIP Speckle client library in Javascript for Node and the Browser

## Installation

To install SpeckleJS with npm, add the following to your `package.json`:

```json
"dependencies": {
  "speckle-js": "logan12358/SpeckleJS"
}
}
```

## Usage

First, require SpeckleJS and create a client object:

```javascript
const Client = require('SpeckleJS')

let client = new Client('https://your.server.url/api/v1', 'YOUR JWT TOKEN')
```

Then, use the client to do fun things:

```javascript
client.streams.getAll()                         // Get all streams
.then(streams => streams[0])                    // Pick the first one (hopefully it exists)
.then(stream => stream.objects[0]._id)          // Get the id of its first object (hopefully that exists)
.then(objectId => client.objects.get(objectId)) // Get that object
.then(console.log)                              // See what's up!
```

## Todo

Lots of things:
- Implement all endpoints in the Speckle spec
- Work out how to best expost the `/accounts` endpoints
- Implement websockets nicely (maybe using `isomorphic-ws`?)
- Add linting to the repo (probably in line with the rest of Speckle)
- Work out how to write tests appropriately (and actually write them)
- Add documentation
- Maybe use SpeckleSpecs to automatically generate or test things
