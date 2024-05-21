const express= require('express');
const router=express.Router();


const indexController= require('../controller/menuController')

router.get('/',indexController.menu)
router.get('/detail/:id',indexController.detail)
router.get('/create',indexController.create)

router.post('/list',indexController.setProduct)



module.exports=router