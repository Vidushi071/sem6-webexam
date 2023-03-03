const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Display All the article
router.get('/articles', async(req, res) => {
    
    const articles = await Article.find({});
    // res.send(products)
    // console.log(products);

    res.render('index', { articles });
});



router.get('/articles/new',(req,res)=>{

    res.render('new')
})

// create product in db
router.post('/articles',async(req,res) =>{

    const {name,desc,markdown} = req.body;

    await Article.create({name,desc,markdown})
    res.redirect('/articles')
})


router.get('/articles/:articleid', async(req,res)=>{

    const {articleid} = req.params;
    const foundarticle = await Article.findById(articleid)
    res.render('show',{article:foundarticle})
})

// Render the edit form prefilled with the product data
router.get('/articles/:articleid/edit', async(req, res) => {

    const { articleid } = req.params;

    const article = await Article.findById(articleid);


    res.render('edit',{article});
});

router.patch('/articles/:articleid', async (req, res) => {
    
    const { articleid } = req.params;

    const { name, desc,markdown } = req.body;

    await Article.findByIdAndUpdate(articleid, { name, desc, markdown });
    
    res.redirect(`/articles/${articleid}`);
});


router.delete('/articles/:articleid', async(req, res) => {
    
    const { articleid } = req.params;

    await Article.findByIdAndDelete(articleid);

    res.redirect('/articles');
})

module.exports = router ;