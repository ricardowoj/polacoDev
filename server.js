const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')

const path = require('path')

server.set('views', path.join(__dirname, 'views'))
server.set("view engine", "nunjucks")
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(routes)

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

const port = process.env.PORT || 3334

init()

server.listen(port, (error) => {
  if(error) {
    throw error
  }
  console.log('Server is running...')
})
  