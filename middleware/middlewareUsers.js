const path = require('path');
const userPath = require('../service/user.json')

const validationUser =(req,res,next)=>{
let users=userPath.find(element=>element.email == req.body.email)
if (users !=undefined){
    req.user=users.nombre
}else{
     return res.render('login', {
				errors: {
					email: {
						msg: 'Este email no está registrado'
					}
				},
				oldData: req.body
			});
}
   next()
}

module.exports=validationUser