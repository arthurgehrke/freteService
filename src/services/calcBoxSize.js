/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict'

const dbConnection = require('./dbConnection')

  const getBoxSize = async(products, productsQuantity) => {
    // Medidas em cm's
    const minHeight = 2
    const maxHeight = 100

    const minWidth = 11
    const maxWidth = 100

    const minLength = 16
    const maxLength = 100

    const minSumDimensions = 26
    const maxSumDimensions = 200

    // Medidas em kg's p/ PAC e SEDEX
    const maxWeight = 30

    const getProductsHeight = await dbConnection.select('height')
      .from('products')
      .whereIn('id', products)

    const productsHeight = getProductsHeight.map(product => {
      return product.height
    })

    var totalHeight = 0
    for (const i in productsHeight && productsQuantity) {
      totalHeight += productsHeight[i] * productsQuantity[i]
    }

    var getProductsWidth = await dbConnection.select('width')
      .from('products')
      .whereIn('id', products)

    const productsWidth = getProductsWidth.map(product => {
      return product.width
    })

    var totalWidth = 0
    for (const i in productsWidth && productsQuantity) {
      totalWidth += productsWidth[i] * productsQuantity[i]
    }

    const getProductsLength = await dbConnection.select('length')
      .from('products')
      .whereIn('id', products)

    const productsLenght = getProductsLength.map(product => {
      return product.length
    })

    var totalLenght = 0
    for (const i in productsLenght && productsQuantity) {
      totalLenght += productsLenght[i] * productsQuantity[i]
    }

    const getProductsWeight = await dbConnection.select('weight')
      .from('products')
      .whereIn('id', products)

    const productsWeight = getProductsWeight.map(product => {
      return product.weight
    })

    var totalWeight = 0
    for (const i in productsWeight && productsQuantity) {
      totalWeight += productsWeight[i] * productsQuantity[i]
    }

    const box = {
      height: 0,
      width: 0,
      length: 0,
      weight: 0,
      dimension_sum: 0,
      items_quantity: 0,
      box_quantity: 1,
    }

    for (const i in productsHeight &&
      productsWidth &&
      productsLenght &&
      productsHeight &&
      productsQuantity) {
      // Altura
      /*  box.altura < productsHeight[i]
        ? (box.altura += productsHeight[i])
        : box.altura */

      box.height += productsHeight[i] * productsQuantity[i]

      // Largura
      if (box.width < productsWidth[i] * productsQuantity[i])
        box.width = productsWidth[i] * productsQuantity[i]

      // Comprimento
      if (box.length < productsLenght[i] * productsQuantity[i])
        box.length = productsLenght[i] * productsQuantity[i]
    }

    box.weight = totalWeight

    productsQuantity.forEach(quantity => {
      box.items_quantity += quantity
    })

    if (box.height > 0 && box.height < minHeight) box.height = minHeight
    if (box.width > 0 && box.width < minWidth) box.width = minWidth
    if (box.length > 0 && box.length < minLength) box.length = minLength


    if (box.height > maxHeight) ++box.box_quantity
    if (box.width > maxWidth) ++box.box_quantity
    if (box.length > maxLength) ++box.box_quantity
    if (box.weight > maxWeight) ++box.box_quantity

    box.dimension_sum = box.height + box.width + box.length
    if (box.dimension > maxSumDimensions) ++box_quantity

    return { box }
  }


module.exports = getBoxSize
