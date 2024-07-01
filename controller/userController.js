const userService = require('../service/userService')

const userController={
    form:(req,res)=>{
        res.render('login')
    },
    create:(req,res)=>{
        req.session.nombre=req.user
        res.redirect('/')

       },
       logout:(req,res)=>{
        req.session.destroy();
        res.redirect('/')
       }
}
module.exports=userController