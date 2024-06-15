const express= require('express');
const router=express.Router();
const validationUsers= require('../middleware/middlewareUsers')
const userController=require('../controller/userController')

router.get('/',userController.form)
router.post('/',validationUsers,userController.create)

module.exports=router