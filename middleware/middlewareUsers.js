const path = require('path');
const userPath = require('../service/user.json')

const validationUser =(req,res,next)=>{
let users=userPath.find(element=>element.email == req.body.email)
if (users !=undefined){
    req.user=users.nombre
    next()
}else 
    res.status(401).send('Unauthorized');
}

module.exports=validationUser