const { makeRequest } = require('../services')

const CorreiosFreteController = {}

CorreiosFreteController.calcValueAndTime = async (request , response) => {
  const { cepDestino } = request.body

  const correiosReturn = await makeRequest(cepDestino)

  response.status(200).json(correiosReturn)
}


module.exports = CorreiosFreteController
