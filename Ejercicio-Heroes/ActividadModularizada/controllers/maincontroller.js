const controller ={
    home:(req, res)=>{
        res.send(`​Ni Superman, Iron
 Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
 hueso que encontrarás en este sitio. <br> Esperamos que ellas y ellos te sirvan como
 inspiración para poder cumplir tus objetivos. Recuerda: <b> ¡nunca pares de creer en
 ti!.`)
    },
    creditos:(req, res)=>{
        res.send('Este fue un trabajo en duo, fue interesante');
    },
    error: (req,res)=>{
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
} ;

module.exports=controller;
