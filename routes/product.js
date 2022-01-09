const router = require('express').Router();
const Product = require('../models/Product')

// @route - GET /api/product
// @desc  - get all products
// @access- PUBLIC
router.get('/', async (req, res) => {
    const products = await Product.find().sort({date: -1});
    res.json(products)
})

// @route - POST /api/product
// @desc  - Create a products
// @access- PUBLIC
router.post('/', async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        quantity: req.body.quantity
    })
    const product = await newProduct.save()
    console.log("Product created successfully")
    res.json(product)
})

module.exports = router;