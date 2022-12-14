const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const options = {
    strict: "throw",
    strictQuery: false
  };

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nhap ten user"],
        trim: true,
        maxLength: [40, "Ten khong the qua 40 ky tu"],
        minLength: [2, "Ten qua ngan"]
    },
    email: {
        type: String,
        required: [true, "Nhap email cua ban"],
        unique: true,
        validate: [validator.isEmail, "Hay nhap email dung"]
    },
    password: {
        type: String,
        required: [true, "Nhap mat khau"],
        minLength: [8, "Mat khau phai dai hon 8 ky tu"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
            },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

userSchema.pre("save", async function (next) {
    
    if(!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

//JWT token

userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPRIRE
    });
};


//Check password login
userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

//Generating Password reset token

userSchema.methods.getResetPasswordToken = function () {

    //Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    //Hash and add token to userschema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

    return resetToken;

};


module.exports = mongoose.model("User", userSchema);
