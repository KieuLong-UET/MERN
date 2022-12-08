const mongoose = require("mongoose");

const options = {
    strict: "throw",
    strictQuery: false
  };

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nhap ten san pham"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Nhap thong tin san pham"]
    },
    price: {
        type: Number,
        required: [true, "Nhap ten san pham"],
        maxLength: [8, "Gia san pham khong the vuot qua 8 ky tu"]
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        },
    ],
    category: {
        type: String,
        required: [true, "Nhap danh muc san pham"]
    },
    stock: {
        type: Number,
        required: [true, "Nhap danh muc san pham"],
        maxLength: [4, "So luong han khong qua 4 ky tu"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type:Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);
