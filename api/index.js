const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

app.use("/api/user", userRoutes);
