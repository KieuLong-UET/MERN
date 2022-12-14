const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
    
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Loi tai server";
    

    //Wrong mongodb id error
    if(err.name === "CastError") {
        const message = `Khong tim thay resource ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    
    //Duplicate error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)}`;
        err = new ErrorHandler(message, 400);
    }
    
    //wrong jwt error
    if(err.name === "JsonWebTokenError") {
        const message = `Json web token is invalid, try agin`;
        err = new ErrorHandler(message, 400);
    }
    
    //wrong jwt error
    if(err.name === "TokenExpireError") {
        const message = `Json web token is expired, try agin`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}