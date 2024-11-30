import mongoose, { Types } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true  // Created At , Updated At
});


const product = mongoose.model('Product',productSchema);

export default product