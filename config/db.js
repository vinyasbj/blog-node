// blog_database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/blog_database', { useNewUrlParser: true }).then((res) => {
    console.log('connected to blog_database'); 
}).catch((err) => {
    console.log(err); 
});

module.exports = {
    mongoose
}