// setting up default proxy server

const request = require('request-promise').defaults({
    // Format:  http://username:password@ip:port
    proxy: 'http://191.37.227.128:8080'
});

(async() => {
    let response = await request('https://httpbin.org/ip');

    console.log(response);
})();