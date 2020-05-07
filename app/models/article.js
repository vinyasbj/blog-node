const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required:true,
        unique: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    title_description:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength: 5000000
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    imageUrl:{
        type: String,
        required: true,
    },
    videoUrl:{
        type: String
    },sub_category:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "SubCategory"
    },source:{
        type: String

    },active: {
        type: Boolean,
        default: true
    }
},{timestamps: true});

// productSchema.pre('save', function(next){
//     console.log('im called before saving')
//     next()
// })

articleSchema.pre('validate', function(next){
    let article = this
    article.slug = this.title.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
    console.log('im called before saving',article.slug)
    next()
})
const Article = mongoose.model('Article',articleSchema)

module.exports = {
    Article
}