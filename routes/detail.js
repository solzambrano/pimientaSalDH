const express= require('express');
const router=express.Router();


const indexController= require('../controller/controller')

router.get('/detail/:id',indexController.detail)


module.exports=router