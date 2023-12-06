const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts
} = require('../controllers/workoutController.js')

const Workout = require('../models/workoutModel')
const router = express.Router()


// routes below

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", (req,res)=>{
  res.json({mssg:"delete a workout"})
})

router.patch("/:id", (req,res)=>{
  res.json({mssg:"UPDATE a workout"})
})

module.exports = router;