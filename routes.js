const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.render("blog/show.njk")
})

routes.get('/blog', (req, res) => {
  return res.render("blog/show.njk")
})

routes.get('/portfolio', (req, res) => {
  return res.render("portfolio/show.njk")
})

module.exports = routes