const {body}=require('express-validator');
const path =require('path')

let validation=[
    body('nombre')
    .notEmpty().withMessage('Debes completar el campo nombre').bail()
    .isAlpha().withMessage('solo se permiten letras'),
    body('precio')
    .notEmpty().withMessage('Debes completar el campo nombre').bail()
    .isNumeric().withMessage('debe ingresar números'),
    body('descrpcion')
    .isLength({ max: 30 }).withMessage('cantidad de caracteres excedida'),
    body('image').custom((value,{req})=>{
        let file=req.file;
        let acceptedExtensions=['.jpg','.png'];
        if(!file){
            throw new Error ('tienes que subir una imagen')
        }else{
            let fileExtension=path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error (`las extensiones permitidas son: ${acceptedExtensions.join(',')}` )
            }
        }
        return true
    })
]

module.exports=validation;