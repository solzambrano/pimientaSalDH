const express= require('express');
const router=express.Router();
const validationUsers= require('../middleware/middlewareUsers')
const validationDataUser=require("../middleware/middlewareValidationLogin")
const validationErrors = require("../middleware/middlewareErrors")
const userController=require('../controller/userController')


router.get('/',userController.form)
router.post('/',validationUsers,validationErrors('login'),validationDataUser,userController.create)
router.get('/logout',userController.logout)
module.exports=router