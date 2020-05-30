const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.render("pages/blog/show")
})

routes.get('/portfolio', (req, res) => {
  return res.render("pages/portfolio/show")
})


module.exports = routes