const express = require('express'); 
const router = express.Router(); 
const { Article } = require('../models/article'); 
// const { Product } = require('../models/product'); 
const { validateID} = require('../middlewares/utilities'); 

//GET localhost:3000/articles/
router.get('/', (req, res) => {
    Article.find().populate({
        path: 'sub_category',
        model: "SubCategory",
        populate: {
            path: "category",
            model: "Category"
        }
    }).then((articles) => {
        res.send(articles); 
    }).catch((err) => {
        res.send(err); 
    });
});

// POST localhost:3000/articles
router.post('/', (req, res) => {
    let body = req.body; 
    let article = new Article(body); 
    console.log('====================================')
    console.log(body)
    console.log('====================================')
    article.save().then((article) => {
        res.send({
            article, 
            notice: 'Successfully created a article'
        }); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 

//PUT 

router.put('/:slug',(req,res) => {
    const slug = req.params.slug 
    const body = req.body 
    
    Article.update({slug: slug}, { $set: body }, { new: true }).then((article) => {
        res.send({
            article,
            notice: "Successfully updated a article"
        })
    }).catch((err) => {
        res.send(err); 
    }); 
});

// GET localhost:3000/articles/:id 
router.get('/:slug', (req, res) => {
    let slug = req.params.slug; 
    Article.findBySlug(slug).then((article) => {
       if(!article || article.length === 0 ) {
           res.send({
               notice: 'record not found'
           })
       }
       res.send(article); 
    }).catch((err) => {
        res.send(err);
    })
}); 

// DELETE localhost:3000/articles/:id
router.delete('/:slug', (req, res) => {
    let slug = req.params.slug; 
    Article.findOneAndDelete({slug: slug}).then((article) => {
        if(!article || article.length === 0 ) {
            res.send({
                notice: 'record not found'
            });
        }
        res.send({
            article, 
            notice: 'successfully deleted the record'
        }); 

    }).catch((err) => {
        res.send(err); 
    })
})

// // articles/id/products
// router.get('/:id/products', validateID, (req,res) => {
//     let articleId = req.params.id; 

//     Article.findAllProducts(articleId).then((products) => {
//         res.send(products);
//     }).catch((err) => {
//         res.send(err); 
//     })

//     // Product.find({ article: articleId}).then((products) => {
//     //     res.send(products);
//     // }).catch((err) => {
//     //     res.send(err); 
//     // })
// }); 


module.exports = {
    articlesController: router
}