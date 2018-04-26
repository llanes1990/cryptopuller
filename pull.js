const https = require("https");

function sendCoinlistRequest() {

    const req = https.request('https://api.coinmarketcap.com/v1/ticker/', getTicker).end();
}

function getTicker(res) {
    //console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8')

    var body= '';
    res.on('data', function(data) {
        body += data;
        //console.log('BODY: ' + data);
    });

    res.on('end', function() {
        body = JSON.parse(body);
        //console.log(body.Data);

        var keys = [];
        for(var k in body)
        {
            console.log(body[k]);
            keys.push(k);
        }
        //console.log(body[99]);
    });
};

sendCoinlistRequest();

/*
name: 'ChainLink',
symbol: 'LINK',
rank: '100',
price_usd: '0.44332',
price_btc: '0.00005011',
'24h_volume_usd': '10231500.0',
market_cap_usd: '155162000.0',
available_supply: '350000000.0',
total_supply: '1000000000.0',
max_supply: null,
percent_change_1h: '-0.0',
percent_change_24h: '-11.53',
percent_change_7d: '-1.37',
last_updated: '1524712757'
*/