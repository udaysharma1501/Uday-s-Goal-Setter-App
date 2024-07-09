const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middlewear/errorMiddlewear');
const PORT = process.env.PORT || 5000;

const app = express();

// middleWear
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals', require('./routes/goalRoutes'))

// overrides the default express errorHandler
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));