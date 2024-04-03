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
        
    } catch (error) {
        console.log(error);
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

