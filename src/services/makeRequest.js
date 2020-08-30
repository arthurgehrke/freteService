const axios = require('axios')
const parseXmlToJson = require('./parseXmlToJson')

const makeRequest = async (cepDestino) => {

  const response = await axios.get(	`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=19225121&sDsSenha=ATroy2313&sCepOrigem=01010010&sCepDestino=${cepDestino}&nVlPeso=1&nCdFormato=1&nVlComprimento=30&nVlAltura=30&nVlLargura=30&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=40010,04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`)
  .then(res => parseXmlToJson(res.data))
  .then(res => res)
  .then(res => res)
  // .then(err => console.log(err))

  return response
}

module.exports = makeRequest
