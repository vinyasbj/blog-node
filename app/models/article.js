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
    }
},{timestamps: true});

const Article = mongoose.model('Article',articleSchema)

module.exports = {
    Article
}