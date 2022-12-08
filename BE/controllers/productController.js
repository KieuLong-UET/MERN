const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");

//Create Product  -- Admin
exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

//Get all product --admin

exports.getAllProducts = async (req, res) => {
    
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });

}


//Get product detail

exports.getProductDetails = async (req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
    
    if(!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    if(product) {
        return res.status(200).json({
            success: true,
            product
        })
    }
    } catch (error) {
        return next(new ErrorHander());
    }

}


//Update product

exports.updateProduct = async (req, res) => {
    
    let product = Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })

}


//Delete product

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Xoa thanh cong san pham"
    })

}