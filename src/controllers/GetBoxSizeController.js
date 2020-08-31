const calcBoxSize = require('../services/calcBoxSize')

const GetBoxSizeController = {}

GetBoxSizeController.calculate = async (request , response) => {
  const { items } = request.body
  
    try {
      const products = []
      const productsQuantity = []

      items.forEach((element) => {
        products.push(element.product_id)
      })

      items.forEach((element) => {
        productsQuantity.push(element.quantity)
      })

      if (!productsQuantity) {
        return response.status(500).json({error: 'No items were found.'})
      }

      const box = await calcBoxSize(products, productsQuantity)

      return response.status(200).json(box)
    } catch (err) {
      return response.status(500).json({error:'unknownError'})
    }
}


module.exports = GetBoxSizeController
