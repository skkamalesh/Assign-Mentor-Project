const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./src/common/dbconfig');
const AppRoutes = require('./src/routes');
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

app.use('/', AppRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



