const https = require("https");

const req = https.request('https://www.cryptocompare.com/api/data/coinlist/', getResult).end();

function getResult(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8')

    var body= '';
    res.on('data', function(data) {
        body += data;
        //console.log('BODY: ' + data);
    });

    res.on('end', function() {
        body = JSON.parse(body);
        console.log(body.Data);

        var keys = [];
        for(var k in body.Data) keys.push(k);
        console.log(keys);
    });
};

/**/