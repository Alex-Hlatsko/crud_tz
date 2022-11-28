import mongoose from "mongoose";

const sallerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    products: [],
},
{timestamps: true}
)

const sallerModel = mongoose.model("seller", sallerSchema);
export default sallerModel;