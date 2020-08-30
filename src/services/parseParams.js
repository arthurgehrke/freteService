const parseParams = object => Object.getOwnPropertyNames(object).map(key => `${key}=${object[key]}`).join('&')

module.exports = parseParams
