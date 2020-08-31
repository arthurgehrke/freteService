const { Router } = require('express')

const CorreiosFreteController = require('./controllers/CorreiosFreteController')
const CepValidatorController = require('./controllers/CepValidatorController')
const GetBoxSizeController = require('./controllers/GetBoxSizeController')

const routes = Router()

routes.get('/', (_, response) => response.json({message: "Hello World"}))

routes.post('/calcFrete', CorreiosFreteController.calcValueAndTime)
routes.post('/validate-cep', CepValidatorController.validate)
routes.post('/get-box-size', GetBoxSizeController.calculate)


module.exports = routes
