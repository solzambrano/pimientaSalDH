const {check}=require('express-validator')
let validation=[
    check('nombre')
    .isAlpha().withMessage('solo se permiten letras')
    .notEmpty().withMessage('Debes completar el campo nombre'),
    check('precio')
    .isNumeric().withMessage('debe ingresar números'),
]

module.exports=validation;