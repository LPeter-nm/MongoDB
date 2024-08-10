import mongoose from 'mongoose';


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
        },

        quantity: {
            type: Number,
            required: true, 
            default: 0,
        },

        price: {
            type: Number,
            required: true, 
            default: 0,
        },

        image: {
            type: String, 
            required: false,
        },  
    },

    {
        timeStamp: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

export {Product};