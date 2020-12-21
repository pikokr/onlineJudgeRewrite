const express = require('express')
const config = require('./config.json')

const app = express()

app.listen(config.server.port, () => console.log(`Listening on port ${config.server.port}`))
