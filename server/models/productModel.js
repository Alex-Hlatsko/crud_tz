import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    sellerId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    follow_companies: [],
},
{timestamps: true}
)

const productModel = mongoose.model("product", productSchema);
export default productModel;