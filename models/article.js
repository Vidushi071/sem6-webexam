const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
    desc: {
        type: String,
        trim:true
    },
    markdown:{
        type:String,
        trim:true
    }
});


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;