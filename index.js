const express = require('express');
const mongoose = require('mongoose');

process.on('SIGINT', () => {
    console.log('Caught interrupt signal');
    process.exit();
});

process.on('SIGTERM', () => {
    console.log('Caught interrupt signal');
    process.exit();
});

const init = async () => {
    const app = express();
    
    console.log("Connecting to MongoDB");
    await mongoose.connect('mongodb://mongodb:27017/testdocker', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    app.get('/', (req, res) => {
        res.json({ message: 'Yo, I\'m Tom, the API' });
    });

    app.listen(3000, () => {
        console.log("App running");
    });
};

init();


