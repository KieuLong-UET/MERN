const mongoose = require("mongoose");
const validator = require("validator")

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

module.exports = mongoose.model("User", userSchema);
