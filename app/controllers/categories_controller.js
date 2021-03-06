const express = require('express'); 
const router = express.Router(); 
const { Category } = require('../models/category'); 
// const { Product } = require('../models/product'); 
const { validateID} = require('../middlewares/utilities'); 

//GET localhost:3000/categories/
router.get('/', (req, res) => {
    Category.find().then((categories) => {
        res.send(categories); 
    }).catch((err) => {
        res.send(err); 
    });
});

// POST localhost:3000/categories
router.post('/', (req, res) => {
    let body = req.body; 
    let category = new Category(body); 
    console.log('====================================')
    console.log(body)
    console.log('====================================')
    category.save().then((category) => {
        res.send({
            category, 
            notice: 'Successfully created a category'
        }); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 

//PUT 

router.put('/:slug',(req,res) => {
    const slug = req.params.slug 
    const body = req.body 
    
    Category.update({slug: slug}, { $set: body }, { new: true }).then((category) => {
        res.send({
            category,
            notice: "Successfully updated a category"
        })
    }).catch((err) => {
        res.send(err); 
    }); 
});

// GET localhost:3000/categories/:id 
router.get('/:slug', (req, res) => {
    let slug = req.params.slug; 
    Category.findBySlug(slug).then((category) => {
       if(!category || category.length === 0 ) {
           res.send({
               notice: 'record not found'
           })
       }
       res.send(category); 
    }).catch((err) => {
        res.send(err);
    })
}); 

// DELETE localhost:3000/categories/:id
router.delete('/:slug', (req, res) => {
    let slug = req.params.slug; 
    Category.findOneAndDelete({slug: slug}).then((category) => {
        if(!category || category.length === 0 ) {
            res.send({
                notice: 'record not found'
            });
        }
        res.send({
            category, 
            notice: 'successfully deleted the record'
        }); 

    }).catch((err) => {
        res.send(err); 
    })
})

// // categories/id/products
// router.get('/:id/products', validateID, (req,res) => {
//     let categoryId = req.params.id; 

//     Category.findAllProducts(categoryId).then((products) => {
//         res.send(products);
//     }).catch((err) => {
//         res.send(err); 
//     })

//     // Product.find({ category: categoryId}).then((products) => {
//     //     res.send(products);
//     // }).catch((err) => {
//     //     res.send(err); 
//     // })
// }); 


module.exports = {
    categoriesController: router
}