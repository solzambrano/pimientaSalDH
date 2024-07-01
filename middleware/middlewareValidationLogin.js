const { body } = require('express-validator');

const loginValidation = [
  body('email')
    .notEmpty().withMessage('Debes completar el campo usuario').bail()
    .isLength({ min: 3 }).withMessage('El usuario debe tener al menos 3 caracteres'),
  body('password')
    .notEmpty().withMessage('Debes completar el campo contraseña').bail()
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];

module.exports = loginValidation;