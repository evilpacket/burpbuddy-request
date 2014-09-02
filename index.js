var request = require('request');
var _ = require('underscore');


module.exports = function (obj, options, cb) {
    if (options && typeof(options) === "function") {
        cb = options;    
        options = {};
    }

    var defaults = {
        url: obj.url,
        method: obj.method,
        headers: obj.headers,
        followRedirect: false,
        stringSSL: false
    };

    var req = _.defaults(options, defaults);

    if (obj.body && obj.body.length > 0) {
        req.body = new Buffer(obj.body, 'base64');
    }

    request(req, cb);
}


