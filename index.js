require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

//PORT
const port = process.env.PORT || 4000;

//DB connection
require("./db/connection");

//Require Routes
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

//Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running");
});

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
