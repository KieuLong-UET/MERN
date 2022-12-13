const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const User = require("../models/userModel");
const { Schema } = require("mongoose");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js")

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
    
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(201).json({
        success: true,
        message: "Dang xuat"
    });

})

//Forgot password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({email: req.body.email});

    if(!user) {
        return next(new ErrorHandler("User not found", 404));
    };

    //Get reset password token
    const resetToken = await user.getResetPasswordToken();

    await user.save({validateBeforeSave: false});
    
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
    
    const message = `Reset password token la: \n\n ${resetPasswordUrl} \n\nBo qua email nay neu khong yeu cau reset password`;
    
    try {
        
        await sendEmail({
            email: user.email,
            subject: `Lay lai mat khau`,
            message
        });

        res.status(200).json({
            success: true,
            message: `Email da duoc gui toi dia chi mail la ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({validateBeforeSave: false});

        return next(new ErrorHandler(error.message, 500));
    }

})