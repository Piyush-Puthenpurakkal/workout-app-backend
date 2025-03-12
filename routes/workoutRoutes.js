const express = require("express");
const authUser = require("../middleware/userMiddleware");
const router = express.Router();

//Require Controllers
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

router.use(authUser);

//Get Entire Records
router.get("/", getWorkouts);

//For single Record
router.get("/:id", getWorkout);

//Post Record
router.post("/", createWorkout);

//Edit Record
router.patch("/:id", editWorkout);

//Delete Record
router.delete("/:id", deleteWorkout);

module.exports = router;
