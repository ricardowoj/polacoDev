const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true
})

const port = process.env.PORT || 3333

server.listen(port, (error) => {
  if(error) {
    throw error
  }
  console.log('Server is running...')
})
  