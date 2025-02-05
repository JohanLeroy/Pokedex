import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoute from './route/apiRoute.js';
import corsOptions from './config/cors.js'
import {connectDB} from "./config/db.js";

// Charger fichier .env
dotenv.config();

// Initilisation de Express
const app = express();

// Utiliser CORS
app.use(cors(corsOptions));

// Format JSON
app.use(express.json());

// Déclaration des routes
app.use('/api', apiRoute)

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    status: false
  })
})


app.listen(3000, () => {
  console.log(`Tentative de connexion à la base de donnée...`);
  connectDB();
  console.log("Server running on port 3000");
});
