const dotenv=require('dotenv')

const express = require('express');
const app = express();
dotenv.config()

// Access environment variables
const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log(DB_USER);
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});