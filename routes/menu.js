const express= require('express');
const router=express.Router();
const multerMidd = require("../middleware/middlewareMenu");

const indexController= require('../controller/menuController')

router.get('/',indexController.menu)
router.get('/create',indexController.create)
router.post('/create', multerMidd.uploadFile.single("image"),indexController.setProduct)

router.get('/detail/:id',indexController.detail) //detalle de producto

router.get('/detail/:id/edit',indexController.edit)
router.put('/detail/:id/edit', multerMidd.uploadFile.single("image"),indexController.update)



module.exports=router