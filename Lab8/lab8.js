function promedio(arreglo){
    let sum = 0;
    for(let i of arreglo){
        sum += i;
    }
    return sum/arreglo.length;
}

function text(str){
    const fs = require('fs');
    fs.writeFileSync('text.txt', str);
    return true;
}

function min(arreglo){
    let m = arreglo[0];
    for(let i of arreglo){
        if(i < m){
            m = i;
        }
    }
    return m;
}

const arreglo = [16, 95, 34, 84, 29, 74, 18, 46, 54, 41];

console.log(promedio(arreglo));
console.log(text("Hola mundo :)"));
console.log(min(arreglo));


// servidor con node.js
const fs = require("fs");
const http = require('http');

const server = http.createServer( (request, response) => {
    fs.readFile('../Lab4/index.html', (error, data) => {
        response.write(data);
        return response.end();
    });
});

server.listen(8000);