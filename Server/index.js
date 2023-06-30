const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routeApi = require('./Routes/streamersRoutes');

// initial backend server
const app = express();
require("dotenv").config();

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  
}));

/// parse json backend
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

 app.use('/api', routeApi);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
