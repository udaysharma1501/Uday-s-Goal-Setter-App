const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middlewear/errorMiddlewear');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// middleWear
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// overrides the default express errorHandler
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));