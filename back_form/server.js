const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const dbMySql = require('mysql');
const db = require('./db');
const MessageUsers = db.Messages;


    //host: "127.0.0.1",
    //user: "root",
    //database: "React_Form",
    //password: ""






http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    
    console.log('Server work');

        let body = '';
        request.on('data', chunk => {
        body += chunk.toString();
    });
        request.on('end', () => {
        
        writeToDb(body, response);
        response.end('ok');
    });
    
}).listen(8000);

function writeToDb (data, res){
    data = JSON.parse(data, true);
    console.log(data);
    MessageUsers.create({
        name: data['name'],
        mail: data['mail'],
        massege: data['message']
    })
    .then(result => {
        console.log(result);
        res.end('ok');
    }).catch( err => {
        console.log('err');
        res.end('error');
    });
}