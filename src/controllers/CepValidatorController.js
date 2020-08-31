const axios = require('axios')

const CepValidatorController = {}

CepValidatorController.validate = async (request , response) => {
  const { cep } = request.body

  var cepIsValid = false

  try {
    const searchingCep = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    cepIsValid = true

    const cepData = searchingCep.data

    return response.status(200).json({ cepData, cepIsValid })
  } catch (err) {
    return response.status(500).json({error:'unknownError'})
  }
}


module.exports = CepValidatorController
