const {Router} = require('express')
const Image = require('../models/Image')
const upload = require('../middleware/upload')
const router = Router()



router.post('/upload', upload.single('avatar'), async (req, res) => {
 const {limits} = upload
    try {
        if(req.file.size < limits.fileSize) {
            const image = new Image({
                    name: req.file.originalname,
                    path: req.file ? req.file.path : '',
                    size: req.file.size,
                    // userId: req.data.image._id,
                }
            )
            const file = req.file
            await image.save()
            res.status(201).json({image, file})
        } else {
            res.status(400).json({message: 'Объем загружаемой картинки не более 5 мегабайт'})
        }



    } catch (error){
        console.log(error)
    }
})

module.exports = router


