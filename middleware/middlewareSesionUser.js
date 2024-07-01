const path = require('path');
const userPath = require('../service/user.json')
//para preguntar si tengo a alguien en session
const userRegister =(req,res,next)=>{
    res.locals.isLogged=false;

if(req.session && req.session.nombre){
res.locals.isLogged=true
res.locals.userLogged=req.session.nombre
}
next()
}

module.exports=userRegister