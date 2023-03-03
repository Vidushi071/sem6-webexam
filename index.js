const express = require('express')
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const seedDb = require('./seed')
const methodOverride = require('method-override');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))

app.use(methodOverride('_method'));


// Routes
const ArticleRoute = require('./routes/ArticleRoute');



mongoose.connect('mongodb://localhost:27017/Article-Pages')
.then(()=>{ console.log("Connected db")})
.catch((err)=>{ console.log(err )});




// seed the db with the dummy products
//   seedDb();

app.use(ArticleRoute);



app.get('/',(req,res)=>{
    res.send("Connected");
})


app.listen(3000,()=>{
    console.log("Server is working at port 3000");
})