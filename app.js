const express= require ('express');
const fs= require ('fs');
const app = express();
const heroes=JSON.parse(fs.readFileSync('./data/heroes.json'),'utf-8');
app.listen (3000);
//1-HOME "/""
app.get ('/', (req, res)=>{
    res.send(`​Ni Superman, Iron
 Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
 hueso que encontrarás en este sitio. <br> Esperamos que ellas y ellos te sirvan como
 inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
 ti!.`)
});
//2-HEROES "/heroes"
app.get ('/heroes', (req, res)=>{
    res.send(heroes);
});

//3-HEROES DETALLE "/heroes/detalle/:id"
app.get ('/heroes/detalle/:id',(req, res)=>{
    ///guardo el nro del heroe que busco
    let heroeBuscado=req.params.id;

    ///me dice si esta
    let heroesEsta = heroes.find ((heroe)=>{
        return heroeBuscado==heroe.id;
    });

        if (heroesEsta){
         //si se encuentra
         res.send (`Hola, mi nombre es: ${heroesEsta.nombre} <br> Mi profesion es: ${heroesEsta.profesion}`)}
         //si no se encuentra
         else {res.send(`El heroe no se encontro`)}
        },)

//4- HEROES- DETALLE CON BIO "/heroes/bio/:id/:ok?"
app.get('/heroes/bio/:id/:ok?', (req, res) => {
    ///guardo el nro del heroe que busco
    let buscado = req.params.id;
    ///guardo si recibe el ok
    let recibe = req.params.ok;

    ///me dice si esta
    let heroeEsta = heroes.find ((heroe)=>{
        return buscado==heroe.id;
    });

    if (heroeEsta){
        ///Si esta
            if(recibe === 'ok'){
            ///si vino acompaniado del ok
            res.send(`Hola, mi nombre es: ${heroeEsta.nombre} <br> Mi resenia es: ${heroeEsta.resenia}`);
                    } else {
                    // Si no vino con el ok
                    res.send (`​Lamento que no desees saber más de mi :(`);
                    }
                    }
    else{
            ///si el heroe no esta
        res.send(`No encontramos el héroe para mostrarte su biografía`)
        }
});

//5-CREDITOS "/creditos"
app.get ('/creditos', (req, res)=>{
    res.send("Este fue un trabajo en duo, el mismo fue interesante.");
});

///SI EL ES INVALIDA LA DIRECCION RECIBIDA
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});