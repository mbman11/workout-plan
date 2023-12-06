const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts
} = require('../controllers/workoutController.js')

const Workout = require('../models/workoutModel.js')
const router = express.Router()


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