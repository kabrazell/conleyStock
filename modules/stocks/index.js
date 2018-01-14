'use strict'
const https = require("https");
const debug = require("debug")("stocks");
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');


const stocks = {
    getForExchange: function(exchange, callback) {
        debug("getting data for exchange " + exchange)
        var parser = parse({
            delimiter: ','
        });
        var output = [];

        var input = fs.createReadStream('./data/exchange/' + exchange + '.csv'); //TODO: fix absolute file ref
        var transformer = transform(function(record, callback) {
            setTimeout(function() {
                debug(record)
                callback(null, record.join(' ') + '\n');
            }, 500);
        }, {
            parallel: 100
        });
      var output = input.pipe(parser).pipe(transformer);
        // debug(process.stdout) 
    }
}
module.exports = stocks