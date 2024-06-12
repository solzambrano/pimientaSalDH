const { validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
   console.log('middleware',req.body)
    if (!errors.isEmpty()) {
        return res.render('create',({ errors: errors.mapped() ,
        oldData:req.body}));
    }
    next();
};

module.exports = errorHandler;
