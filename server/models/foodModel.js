import mongoose from "mongoose";
const { Schema } = mongoose;

const foodSchema = new Schema({
    id: {
        type: Number, 
        required: [true, "Name is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    size : [],
    price: [],
    image: {
        type: String,
        required: [true, "image is required"]
    },
    discription: {
        type: String,
    },
    type: {
        type: String,
        required : [true, "category is required"]
    }
}, {
    timestamps:true
});

const foodModel = mongoose.model("foodMenu", foodSchema)
export default foodModel;