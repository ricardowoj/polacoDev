const express = require('express')
const server = express()
const routes = require('./routes')

const path = require('path')

server.set('views', path.join(__dirname, 'src/views'))
server.set("view engine", "ejs")
server.use(express.static(path.join(__dirname, 'public')))
server.use(routes)

const port = process.env.PORT || 3000

server.listen(port, (error) => {
  if(error) {
    throw error
  }
  console.log('Server is running...')
})
   