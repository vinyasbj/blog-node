
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

subCategorySchema.pre('validate', function(next){
    let sub_category = this 
    sub_category.slug = this.name.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
    console.log('im called before saving',sub_category.slug)
    next()
})

const SubCategory = mongoose.model('SubCategory',subCategorySchema);

module.exports = {
    SubCategory
}