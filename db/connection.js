const mongoose = require("mongoose");

mongoose
  // .connect("mongodb://localhost:27017/Project")
  .connect(
    "mongodb+srv://piyushbaburaj98:IuOlpMUGmY3TY13S@cluster0.av3nv.mongodb.net/WorkoutApp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connection is Established");
  })
  .catch((err) => {
    console.log("Error is :${err}");
  });
