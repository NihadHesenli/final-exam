const mongoose = require('mongoose')


const {Schema} = mongoose

const newSchema = new Schema (
    {
        image : {type : String , require: true},
        title : {type : String , require: true},
        description : {type : String , require: true},
        price : {type : Number , require: true},
    },
    {
        versionKey : false , timestamps : true
    }
)

const Product = mongoose.model('products' , newSchema)

module.exports = Product