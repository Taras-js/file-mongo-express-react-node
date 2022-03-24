const {Schema, model, Types} = require('mongoose')

const Image = new Schema({

    name:  {type: String, required: true},
    path:  {type: String, required: true},
    size: {type: Number, required: true},
    userId: {type: Types.ObjectId, ref: 'User'},

})

module.exports = model('Image', Image)