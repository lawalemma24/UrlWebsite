require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db.config/dbConnections.JS');
const urlRoutes = require('../backend/routes/urlRoutes.js');

const app = express();


connectDB();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // headers: ['Content-Type': 'application/json'],
    credentials: true,
}));


// Routes
app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))