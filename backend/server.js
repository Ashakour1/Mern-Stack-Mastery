const express = require("express");
const dotenv = require("dotenv")
const colors = require("colors");
const connectDB = require("./config/db");
dotenv.config();


// connectDB();

const {errorHandler} = require("./middleware/errorMiddle")


// console.log(process.env.NODE_ENV);
const port = process.env.PORT || 5000;

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: false }));

App.use("/api/goals", require("./routes/goalsroutes"));

App.use(errorHandler);

App.listen(port, () => {
  console.log(`server running on port ${port}`);
});
