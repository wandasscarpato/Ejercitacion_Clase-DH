const heroes = require('../data/heroes.json');
const controllerheroe ={
    hero:(req, res)=>{
        res.send(heroes);
    },
    biografia: (req, res) => {
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
    },
    detalle: (req, res)=>{
        ///guardo el nro del heroe que busco
        let heroeBuscado=req.params.id;
        ///me dice si esta el heroe
        let heroesEsta = heroes.find ((heroe)=>{
            return heroeBuscado==heroe.id;
        });
            if (heroesEsta){
             //si se encuentra
             res.send (`Hola, mi nombre es ${heroesEsta.nombre} y mi profesion es ${heroesEsta.profesion}`)}
             //si no se encuentra
             else {res.send(`El heroe no se encontro`)}
            }
        }


module.exports=controllerheroe;

