const { Router } = require('express')

const CorreiosFreteController = require('./controllers/correiosFreteController')

const routes = Router()

routes.get('/', (_, response) => response.json({message: "Hello World"}))

routes.post('/calcFrete', CorreiosFreteController.calcValueAndTime)

module.exports = routes
