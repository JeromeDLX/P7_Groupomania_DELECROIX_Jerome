// Mise en place de multer
const multer = require('multer');

// Définition de mime types
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

// Mise en place du dossier images ou seront stockées les images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        const extension = MIME_TYPES[file.mimetype]
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension)
    }
});

const upload = multer({ storage: storage, dest: "images/"});
const imageToUpload = upload.single('image');

module.exports = { imageToUpload };