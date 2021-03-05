const { resolveSoa } = require('dns');
const http = require('http');
const perros = ['Boyo', 'Mina', 'Luke', 'Sam', 'Jade', 'Kira'];

const server = http.createServer( (request, response) => {

// rutas:
// /anadir perro, /perros-en-guarderia, /home

    if (request.url == '/perros') {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Perros</title></head>");
        response.write("<body><h1>Perros en guarderia</h1></body>");
        response.write("<ul>")
        perros.forEach(perro => {
            response.write("<li>");
            response.write(perro);
            response.write("</li>");
        });
        response.write("</ul>")
    }

    else if (request.url == "/nuevo-perro" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Añadir perro</title></head>");
        response.write("<body><h1>Añadir perro</h1></body>");
        response.write('<form action="nuevo-perro" method="POST"><input type="text" name="nombre"><input type="submit" value="Registrar perro en guarderia"></form>');
        response.write("</html>");
    }

    else if (request.url == "/nuevo-perro" && request.method == "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datoFinal = Buffer.concat(datos).toString();
            const nuevoPerro = datoFinal.split('=')[1];
            perros.push(nuevoPerro);
            response.writeHead(301,{Location:'/perros'});
            return response.end();
        });
    }     
      
    else if (request.url == "/home") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Guarderia de perros</title></head>");
        response.write("<body><h1>Bienvenido a la guarderia de perros</h1></body>");
        response.write("<body><h3>Las rutas son:</h3></body>");
        response.write("<body><p><ul>");
        response.write("<li>/home</li>");
        response.write("<li>/perros</li>");
        response.write("<li>/nuevo-perro</li>");
        response.write("</ul></p></body>");
        response.write("</html>"); 
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Page not found</title></head>");
        response.write("<body><h1>Error 404: Page not found</h1></body>");
        response.write("</html>");   
    }
});

server.listen(8080);