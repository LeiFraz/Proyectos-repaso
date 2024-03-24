// const empleados = ['Juan','Cristian','Matias'];

// empleados.forEach(item => console.log(item));

const http = require('http');
const port = 5000;

const server = http.createServer((req,res) => 
{
    res.end('esta es una respuesta');
})

server.listen(port, () => console.log('funcionando'));