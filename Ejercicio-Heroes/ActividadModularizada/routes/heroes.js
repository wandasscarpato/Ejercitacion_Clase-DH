const express = require ('express');
const router=express.Router();

let heroescontroller= require ('../controllers/heroescontroller.js');

router.get ('/', heroescontroller.hero);
router.get('/detalle/:id', heroescontroller.detalle);
router.get ('/bio/:id/:ok?', heroescontroller.biografia);

module.exports=router;
