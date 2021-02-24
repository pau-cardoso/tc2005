// Prueba para enviar peticion al server y abra el laboratorio 4
const http = require('http');
const fs = require('fs');

const server = http.createServer( (request, response) => {
    fs.readFile('../Lab4/index.html', (error, data) => {
        response.write(data);
        return response.end();
    });
});

server.listen(3000)