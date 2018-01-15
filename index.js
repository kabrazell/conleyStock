'use strict'
require('dotenv').config()
const debug = require('debug')('index')
const csv = require('csv')

//Local Imports
const zacks = require('./modules/zacks')
const stocks = require('./modules/stocks')

stocks.getForExchange("nasdaq", function(stocks){
	debug(stocks)
})
// zacks.getStockDetails(['INTC'], function(stockDetails){
// 	debug(stocks)
// })

// debug("Hello World")
