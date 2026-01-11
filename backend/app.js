require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/db.config/dbConnections.js');
const urlRoutes = require('../backend/routes/urlRoutes.js');

const app = express();


connectDB();

app.use(express.json());
app.use(cors({
    origin: 'https://url-website-p59k.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // headers: ['Content-Type', 'application/json'],
    credentials: true,
}));


app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
});

// Routes
app.use('/api', urlRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))