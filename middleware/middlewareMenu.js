const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images')); // Ajusta la ruta según tu estructura de proyecto
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({ storage: storage });

const multerMidd = {
    storage: storage,
    uploadFile: uploadFile
};

module.exports = multerMidd;
