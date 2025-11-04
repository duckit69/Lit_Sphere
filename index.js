const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = 3000
const mongoURI = process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.status(200).json({message: "Hello World!"})
})

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connection successful.');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
