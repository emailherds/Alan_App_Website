import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Review } from "./models/reviewModel.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hello World');
});

app.post('/reviews', async (request, response) => {
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

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });        
    })
    .catch((error) => {
        console.log(error);
    });

