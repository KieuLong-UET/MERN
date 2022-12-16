const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const ApiFeatures = require("../utils/apifeatures")

//Create Product  -- Admin
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {

        req.body.user = req.user.id;

        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product
        })
    }
)

//Get all product --admin

exports.getAllProducts = catchAsyncErrors(
    async (req, res) => {
        
        const resultPerPage = 5;
        const productsCount = await Product.countDocuments();

        const apiFeature = new ApiFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resultPerPage);

        const products = await apiFeature.query;
        
        res.status(200).json({
            success: true,
            products,
            productsCount
        });
    
    }
)


//Get product detail

exports.getProductDetails = catchAsyncErrors(
    async (req, res, next) => {

        const product = await Product.findById(req.params.id);
        
        if(!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
    
        if(product) {
            return res.status(200).json({
                success: true,
                product
            })
        }
    }
)


//Update product

exports.updateProduct = catchAsyncErrors(
    async (req, res) => {
    
        let product = Product.findById(req.params.id);
    
        if(!product) {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        }
    
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        res.status(200).json({
            success: true,
            product
        })
    
    }
)


//Delete product

exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {

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
)

//Create and update review

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const {rating, comment, productId} = req.body;
    
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating,
        comment
    };

    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler('khong tim thay san pham', 404));
    }

    // const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());

    const isReviewed = false;

    if (isReviewed) {
        product.reviews.forEach(rev => {
            if (rev.user.toString() === req.user._id.toString())
            (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    };

    let avgRating = 0;
    product.reviews.forEach(rev => {
       avgRating += rev.rating; 
    });

    product.ratings = avgRating / product.numOfReviews;

    await product.save({validateBeforeSave: false});

    res.status(200).json({
        success: true,
        product
    })
})