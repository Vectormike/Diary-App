const mongoose = require('mongoose');

// Connect Mongoose
mongoose.connect("mongodb://localhost/blog_app", {useNewUrlParser: true});
// DB Schema
let blogSchema = new mongoose.Schema({
    title: String,
    image: {
        type: String,
        default: "placeholder.jpg"
    }, 
    saySomething: String,
    created: {
        type: Date,
        default: Date.now
    }
});

//Compiling to Model
let blog = mongoose.model('blog', blogSchema);
module.exports = blog;
// Dynamic creation
// blog.create({
//     title: "Sad",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSc6uGNxaa2xyP0ZR-PWPNElL_OGgy4UOO_LRo2X2V1RuO8dT",
//     saySomething: "How much sad can  be?"
// });

