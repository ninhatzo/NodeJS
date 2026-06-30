var http = require("http");

http.createServer(function(request, response) {
    response.write("Primeiros passos com Node.JS");
    response.end();
}).listen(8081);

console.log("Servidor rodando em https//localhost:8081");
