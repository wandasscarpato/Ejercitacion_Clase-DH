const express = require ('express');
const router=express.Router();

let maincontroller= require ('../controllers/maincontroller.js');


router.get ('/', maincontroller.home);
router.get ('/creditos', maincontroller.creditos);

router.get ('*', maincontroller.error);


module.exports=router;