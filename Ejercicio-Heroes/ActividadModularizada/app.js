const express = require ('express');
const fs = require ('fs');//por json
const main=require ('./routes/main.js');
const rutaHeroe= require ('./routes/heroes.js');

let app = express();

//leyendo y parseando al array
const heroes=JSON.parse(fs.readFileSync('./data/heroes.json'),'utf-8');

app.use ('/heroes', rutaHeroe);

app.use ('/', main)

app.use ('/creditos', main);

app.use ('*', main);


app.listen (3000,()=> console.log ("Funciona"));