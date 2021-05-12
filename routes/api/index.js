const router = require("express").Router()

router.use("/workouts", require("./workout-routes"))

module.exports= router