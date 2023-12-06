const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController.js')

const Workout = require('../models/workoutModel')
const router = express.Router()


// routes below

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)


module.exports = router;