const express = require('express'); 
const router = express.Router(); 
// const { booksController } = require('../app/controllers/books_controller');
const { categoriesController } = require('../app/controllers/categories_controller'); 
const { subCategoriesController } = require('../app/controllers/subcategories_controller'); 
// const { productsController } = require('../app/controllers/products_controller');
// const { usersController } = require('../app/controllers/users_controller')
// const { ordersController } = require('../app/controllers/orders_controller')

// router.use('/books', booksController); 
router.use('/categories', categoriesController); 
router.use('/sub_categories', subCategoriesController); 
// router.use('/products', productsController); 
// router.use('/users', usersController)
// router.use('/orders', ordersController)

module.exports = {
    routes: router
}