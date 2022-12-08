const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
    
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Loi tai server";
    

    //Wrong mongodb id error
    if(err.name === "CastError") {
        const message = `Khong tim thay resource ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}