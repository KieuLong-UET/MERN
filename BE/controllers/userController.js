const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const User = require("../models/userModel");
const { Schema } = require("mongoose");
const sendToken = require("../utils/jwtToken");

//Register a User

exports.registerUser = catchAsyncErrors (
    async (req, res, next) => {
        const {name, email, password} = req.body;

        const user = await User.create({
            name, email, password,
            avatar: {
                public_id: "id sample",
                url: "profile url"
            }
        });

        sendToken(user, 201, res);
    }
);

//Login user 

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    
    const {email, password} = req.body;

    //Check thong tin data gui len

    if(!email || !password) {
        return next(new ErrorHandler("Chua dien day du thong tin user", 400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // const token = user.getJWTToken();

    // res.status(201).json({
    //     success: true,
    //     token
    // });

    sendToken(user, 200, res);
})


//Logout user

exports.logout = catchAsyncErrors(async (req, res, next) => {
    
    req.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(201).json({
        success: true,
        message: "Log out"
    });

})