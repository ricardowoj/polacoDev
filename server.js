const express = require('express')
const methodOverride = require('method-override')
const nunjucks = require('nunjucks')
const routes = require('/routes')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("view", {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(5555, () => {
  console.log('Server is running')
})