const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware')

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, console.log(`Listening on ${port}`));