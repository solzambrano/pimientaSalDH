const path = require('path');
const userPath = require('../service/user.json')
//para preguntar si tengo a alguien en session
const userRegister =(req,res,next)=>{
    res.locals.isLogged=false;

if(req.session && req.session.nombre){
res.locals.isLogged=true
res.locals.userLogged=req.session.nombre
}
if(req.body.remember){
let nameUser=req.cookies.user;

    console.log(nameUser);
if(nameUser){
    req.session.nombre=nameUser;
    res.locals.userLogged=nameUser
}
}

next()
}

module.exports=userRegister