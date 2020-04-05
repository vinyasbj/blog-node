// blog_database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
// const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://heroku_f4cwmxmm:r7fhkli2hi34pchn6qur3jjhlq@ds119765.mlab.com:19765/heroku_f4cwmxmm';
mongoose.connect('mongodb://localhost:27017/blog_database', { useNewUrlParser: true }).then((res) => {
    console.log('connected to blog_database'); 
}).catch((err) => {
    console.log(err); 
});

// mongoose.connect(CONNECTION_URI, { useNewUrlParser: true }).then((res) => {
//     console.log('connected to db'); 
// }).catch((err) => {
//     console.log(err); 
// }); 

module.exports = {
    mongoose
}