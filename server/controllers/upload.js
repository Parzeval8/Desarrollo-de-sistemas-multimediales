const multer = require('multer')

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {

        console.log("harry es gay")
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log("harry es gay")

        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')


exports.uploadFile = (req, res) => {
    res.send({ data: 'Enviar un archivo' })
}