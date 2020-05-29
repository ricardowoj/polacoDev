const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')

const path = require('path')

server.use(express.static(path.join(__dirname, 'public')))
server.use(routes)
server.set("view engine", "njk")
server.set('views', path.join(__dirname, 'src/app/views'))

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true
})

const port = process.env.PORT || 3334

server.listen(port, (error) => {
  if(error) {
    throw error
  }
  console.log('Server is running...')
})
  