// Object Prototype Function

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema 
// const { Product } = require('./product'); 
const parameterized = require('../middlewares/utilities')
const categorySchema = new Schema({
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
    }
},{timestamps: true}); 


categorySchema.pre('validate', function(next){
    let category = this 
    category.slug = this.name.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
    console.log('im called before saving',category.slug)
    next()
})

// static methods or instance methods should not be arrow functions

// defining our own static methods, adding our own behaviour in our project
categorySchema.statics.findAllProducts = function(id){
    let categoryId = id; 
    return Product.find({ category: categoryId})
}

categorySchema.statics.findBySlug = function(slug){
    let categorySlug = slug;
    return Category.find( { slug:  categorySlug })
}

const Category = mongoose.model('Category', categorySchema); 

module.exports = {
    Category
}

