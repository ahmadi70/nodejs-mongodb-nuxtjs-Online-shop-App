const router = require('express').Router()
const Product = require('../models/product')

// Post request - insert a product
router.post('/products', async (req, res) => {
    try {
        const image = req.file
        const product = new Product()
        product.category = req.body.categoryID;
        product.owner = req.body.ownerID;
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = image.path.split('static/').pop();
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save()

        res.json({
            status: true,
            message: "Successfully saved."
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all products
router.get('/products', async (req, res) => {
    try {
        let products = await Product.find()
        .sort({$natural: -1}).populate(['owner', 'category'])
        .populate('reviews', 'rating')
        res.json({
            status: true,
            products: products
        }) 
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get a product by id
router.get('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOne({_id: req.params.id})
        .populate(['owner', 'category'])
        .populate('reviews', 'rating')
        res.json({
            status: true,
            product: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// put request - update a product
router.put('/products/:id', async (req, res) => {
    try {
        const image = req.file
        let product = await Product.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                category: req.body.categoryID,
                owner: req.body.ownerID,
                title: req.body.title,
                description: req.body.description,
                photo: image.path.split('static/').pop(),
                price: req.body.price,
                stockQuantity: req.body.stockQuantity
            }},
            {upsert: true}
            )
        
        res.json({ status: true, updatedProduct: product })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})
// delete request - to delete a product
router.delete('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedProduct: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router
