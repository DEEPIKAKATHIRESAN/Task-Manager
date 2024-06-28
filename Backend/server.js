const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require("mongoose");
const taskrouter = require('./route/taskrouter');
const cors=require('cors');
// Middleware for logging requests
app.use((req, res, next) => {
    console.log("Path: " + req.path + ' Method: ' + req.method);
    next();
});

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port " + process.env.PORT);
        });
    })
    .catch((error) => console.log(error));

// Use the task router for /api/tasks
app.use('/api/tasks', taskrouter);
