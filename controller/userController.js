const userService = require('../service/userService')

const userController={
    form:(req,res)=>{
        res.render('login')
    },
    login:(req,res)=>{
        req.session.nombre=req.user;
         res.cookie('user',req.user,{ maxAge:1000*2})
        res.redirect('/')

       },
       logout:(req,res)=>{
        req.session.destroy();
        res.redirect('/')
       }
}
module.exports=userController