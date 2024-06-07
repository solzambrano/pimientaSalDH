const express= require('express');
const router=express.Router();
const multerMidd = require("../middleware/middlewareMenu");
const validationData=require("../middleware/middlewareValidation")
const validationError=require("../middleware/middlewareErrors")
const indexController= require('../controller/menuController')

router.get('/',indexController.menu)

router.get('/create',indexController.create)
router.post('/create', multerMidd.uploadFile.single("image"),
validationData,
validationError,
indexController.setProduct)

router.get('/detail/:id',indexController.detail) //detalle de producto

router.get('/detail/:id/edit',indexController.edit)
router.put('/detail/:id/edit', multerMidd.uploadFile.single("image"),indexController.update)

router.delete('/detail/:id/delete',indexController.delete)


module.exports=router