const request = require('request-promise');
request.debug = 1; // To see the errors in the debug

(async() => {

    console.log('Initial Request');

    try {
        let status = await request({
            uri: 'https://httpbin.org/status/350',
            resolveWithFullResponse: true // To see all the info
        });
    } catch (response) {
        if (response.statusCode == 300) {
            console.log('Everyhing is ok');
        } else {
            console.log(`Something happened: ${response}`);
            process.exit(1);
        }
    }

})();