var express = require('express');
var app = express();

app.get('/', c_home);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_home(req, res) {
    res.sendFile(__dirname + '/public/home.html');
}

function c_clientes(req, res) {
    res.sendFile(__dirname + '/public/clientes.html');
}

function c_productos(req, res) {
    res.sendFile(__dirname + '/public/productos.html');
}

function c_server(req, res) {
    console.log('port: 8000');
}

var server = app.listen(8000, c_server);