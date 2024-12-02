import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Review } from "./models/reviewModel.js";
import reviewsRoute from "./routes/reviewsRoutes.js"
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

const __dirname = path.resolve(); // Resolve current directory
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Fallback route for React (handles React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

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

