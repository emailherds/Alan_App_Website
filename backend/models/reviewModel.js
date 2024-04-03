import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

export const Review = mongoose.model('review', { name: String, rating: Number, description: String});
