const router = require('express').Router();
const Product = require('../models/Product')

// @route - GET /api/product
// @desc  - get all products
// @access- PUBLIC
router.get('/', async (req, res) => {
    const products = await Product.find().sort({date: -1});
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.json(products)
})

// @route - GET /api/product/ID
// @desc  - get single product
// @access- PUBLIC
router.get('/:id', async (req, res) => {
    const productId = req.params.id
    const foundProduct = await Product.findById(productId) 
    res.json(foundProduct)
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