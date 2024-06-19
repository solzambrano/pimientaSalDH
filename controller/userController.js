const user=require('../service/userService')

const userController={
    form:(req,res)=>{
        res.render('login')
    },
    create:(req,res)=>{
        console.log('controller',req.body);
        req.session.user=req.user
        user.create(req.body)
        res.send('hola admin  '+req.user)
    }
}

module.exports=userController