import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    companyId: {
        type: String,
        required: true,
    },
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
    bid_amount: {
        type: Number,
        required: true,
    },
    campaign_fund: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    town: {
        type: String,
        required: true,
    }, 
    radius: {
        type: Number,
        required: true,
    }, 
    keywords: [],
    follow_product: [],
},
{timestamps: true}
)

const companyModel = mongoose.model("company", companySchema);
export default companyModel;