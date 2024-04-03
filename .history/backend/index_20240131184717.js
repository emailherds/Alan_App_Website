import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Review } from "./models/reviewModel.js";
import reviewRoutes from "./routes/reviewRoutes.js"

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hello World');
});

app.use('/reviews', reviewRoutes);

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

