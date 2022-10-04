const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('testing server \n\n');
    res.end('ending response')
}).listen(3000);

console.log('web server of port 300 has been created');
console.log('response of the server port 3000 has been coded');