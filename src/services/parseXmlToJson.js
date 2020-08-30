const xml2js = require('xml2js')

const replaceBrackets = require('./replaceBrackets')

const parser = new xml2js.Parser()

const parseXmlToJson = async(xml) => {
  let response

  await parser.parseString(xml, (err,result) => {
    if (err) return err

    response = result

    return response
  })

  const freteData = {};
  const codes = { "40010": 'sedex', "04510": 'pac' };

  response.Servicos.cServico.map(prop => {
    const { Codigo, Valor, PrazoEntrega } = prop;
    freteData[codes[Codigo[0]]] = {
        valor: parseFloat(Valor[0].replace(",", ".")),
        prazo: parseInt(PrazoEntrega[0])
    };
  });
  
  return freteData
}

module.exports = parseXmlToJson
