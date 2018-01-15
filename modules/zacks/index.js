'use strict'
const https = require("https");
const debug = require("debug")("zacks");

const zacks = {
    getStockDetails: function(stockArray, callback) {
        debug(stockArray.toString())
        var options = {
            method: "GET",
            hostname: "quote-feed.zacks.com",
            path: "/index" + "?t=" + stockArray.toString(),
            headers: {
                Origin: "https://www.zacks.com",
                Accept: "*/*",
               "Cache-Control": "no-cache",
            }
        };

        var req = https.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                debug(body.toString());
                callback(body)
            });
        });

        req.end();
    }
}

module.exports = zacks