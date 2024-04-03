import express from "express";
import { Review } from "../models/reviewModel";

const router = express.Router();

router.post('/reviews', async (request, response) => {
    try {
        if(!request.body.name || !request.body.rating){
            return response.status(400).send({message: 'needs all required fields'})
        }

        const newReview = {
            name: request.body.name,
            rating: request.body.rating,
            description: request.body.description,
        };

        const review = await Review.create(newReview);

        return response.status(201).send(review);
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.get('/reviews', async (request, response) => {
    try {
        const reviews = await Review.find({});

        return response.status(200).json({
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.get('/reviews/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const review = await Review.findById(id);

        return response.status(200).json(review);
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.put('/reviews/:id', async (request, response) => {
    try {
        if(!request.body.name || !request.body.rating){
            return response.status(400).send({message: 'needs all required fields'})
        }

        const {id} = request.params;

        const result = await Review.findByIdAndUpdate(id, request.body);

        if(!result){
            response.status(404).send({message: "review not found"});
        }
        return response.status(200).send({message: "review updated successfully"});
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.delete('/reviews/:id', async(request, response) => {
    try {
        const {id} = request.params;
        
        const result = await Review.findByIdAndDelete(id, request.body);
        
        if(!result){
            response.status(404).send({message: "review not found"});
        }

        return response.status(200).send({message: "review deleted successfully"});
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

export default router;