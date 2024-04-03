import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Review } from "./models/reviewModel.js";
import reviewsRoute from "./routes/reviewsRoutes.js"

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hello World');
});

app.use('/reviews', reviewsRoute);

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

