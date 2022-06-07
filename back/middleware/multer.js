// Mise en place de multer

const multer = require('multer');

// Mise en place du dossier images ou seront stockées les images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        const {mimetype} = file
        const extension = mimetype.split("/")[1]
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension)
    }
});

const upload = multer({ storage: storage, dest: "images/"});
const imageToUpload = upload.single('image');

module.exports = { imageToUpload };