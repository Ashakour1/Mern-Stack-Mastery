const express = require("express");
const dotenv = require("dotenv").config();


const {errorHandler} = require("./middleware/errorMiddle")


// console.log(process.env.NODE_ENV);
const port = 7000;

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: false }));

App.use("/api/goals", require("./routes/goalsroutes"));

App.use(errorHandler);

App.listen(port, () => {
  console.log(`server running on port ${port}`);
});
