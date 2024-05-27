const express= require('express');
const router=express.Router();


const indexController= require('../controller/menuController')

router.get('/',indexController.menu)
router.get('/create',indexController.create)
router.post('/list',indexController.setProduct)

router.get('/detail/:id',indexController.detail)
router.get('/detail/:id/edit',indexController.modify)
router.put('/detail/:id/edit',indexController.modify)



module.exports=router