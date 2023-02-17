const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const dbMySql = require('mysql');

const conn = dbMySql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "React_Form",
    password: ""
});

conn.connect(err => {
    if (err){
        console.log(err);
        return err;
    } else {
        console.log('DataBase ---- OK');
    }
});



http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    
    console.log('Server work');

    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        
        let params = JSON.parse(body);
        console.log(params.name);
        let myName = params.name;
        
        let query = "INSERT INTO `Message_from_users`(`name`) VALUES" + "(" + myName + ")";

        

        
         
         conn.query(query, (err, result) => {
            
            console.log(err);
            
         
        });
        
        conn.end( err => {
            if (err){
                console.log(err);
                return err;
            } else {
                console.log('DataBase ---- Close');
            }
        });
        
        
        response.end('ok');
    });
    
}).listen(8000);

