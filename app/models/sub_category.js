
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema 

const subCategorySchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 1,
        maxlength: 64,
        unique: true
    },
    slug: {
        type: String,
        required: true, 
        minlength: 1,
        maxlength: 64,
        unique: true
    },category:{
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'Category'
    }
},{timestamps: true});

const SubCategory = mongoose.model('SubCategory',subCategorySchema);

module.exports = {
    SubCategory
}