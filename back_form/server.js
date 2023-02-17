const http = require('http');
const url = require('url');
const {parse} = require('querystring');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log('Server worck');

    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        let params = parse(body);
        console.log(params);
        
        response.end('ok');
    });
    
}).listen(8000);