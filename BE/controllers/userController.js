const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const User = require("../models/userModel");
const { Schema } = require("mongoose");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto");

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

    const isPasswordMatched = await user.comparePassword(password);
    
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
    const resetToken = user.getResetPasswordToken();

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

});


//reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    //Create token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    });

    if(!user) {
        return next(new ErrorHandler("Reset password token has problem", 400));
    };

    if(req.body.password !== req.body.confirmPassword){
        return (new ErrorHandler("Kiem tra lai password va confirm password", 400));
    };

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
})

//user details

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

//update user password

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    
    if(req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password khong khop", 400));
    }
    
    const user = await User.findById(req.user.id).select("+password");
    
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    
    if(!isPasswordMatched) {
        return next(new ErrorHandler("Old password khong dung", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
})

//update user detail

exports.updateUserDetail = catchAsyncErrors(async (req, res, next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        success: true,
        user
    });
});

//Get all user (admin)

exports.getAllUser = catchAsyncErrors(async (req, res, next) => {

    const users = await User.find(req.params.id);

    res.status(200).json({
        success: true,
        users
    })
})

//Get single user (admin)

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`khong ton tai user: ${req.params.id}`, 401))
    }

    res.status(200).json({
        success: true,
        user
    })
})


//update user --admin

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        success: true,
        user
    });
});


//Delete user --admin

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findById(req.params.id);

    if(!user) {
        return(new ErrorHandler(`User not found : ${req.params.id}`));
    }

    await user.remove();
    
    res.status(200).json({
        success: true,
        message: "Xoa user thanh cong"
    });
});