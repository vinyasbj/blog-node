const express = require('express'); 
const router = express.Router(); 
const { Category } = require('../models/category'); 
const { SubCategory } = require('../models/sub_category'); 
const { validateID} = require('../middlewares/utilities'); 

//GET localhost:3000/sub_categories/
router.get('/', (req, res) => {
    SubCategory.find().populate('category').then((sub_categories) => {
        res.send(sub_categories); 
    }).catch((err) => {
        res.send(err); 
    });
});

// POST localhost:3000/categories
router.post('/', (req, res) => {
    let body = req.body; 
    let sub_category = new SubCategory(body); 
    console.log('====================================')
    console.log(body)
    console.log('====================================')
    sub_category.save().then((sub_category) => {
        res.send({
            sub_category, 
            notice: 'Successfully created a sub_category'
        }); 
    }).catch((err) => {
        res.send(err); 
    }); 
}); 

//PUT 

router.put('/:slug',(req,res) => {
    const slug = req.params.slug 
    const body = req.body 
    
    SubCategory.update({slug: slug}, { $set: body }, { new: true }).then((sub_category) => {
        res.send({
            sub_category,
            notice: "Successfully updated a sub_category"
        })
    }).catch((err) => {
        res.send(err); 
    }); 
});


// GET localhost:3000/categories/:id 
router.get('/:slug', (req, res) => {
    let slug = req.params.slug; 
    SubCategory.findBySlug(slug).then((category) => {
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


// GET localhost:3000/categories/:id 
router.get('/:slug', (req, res) => {
    let slug = req.params.slug; 
    SubCategory.findBySlug(slug).then((sub_category) => {
       if(!sub_category || sub_category.length === 0 ) {
           res.send({
               notice: 'record not found'
           })
       }
       res.send(sub_category); 
    }).catch((err) => {
        res.send(err);
    })
}); 

// DELETE localhost:3000/categories/:id
router.delete('/:slug', (req, res) => {
    let slug = req.params.slug; 
    SubCategory.findOneAndDelete({slug: slug}).then((sub_category) => {
        if(!sub_category || sub_category.length === 0 ) {
            res.send({
                notice: 'record not found'
            });
        }
        res.send({
            sub_category, 
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
    subCategoriesController: router
}